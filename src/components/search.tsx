/**
 * @file search.tsx
 * @description Search component, this is the search input component
 * @version 1.0.0
 */
'use client';
// External imports
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/modal";
import clsx from "clsx";
import React from "react";
import { useRouter } from "next/navigation";

// Internal imports
import {
    ContactIcon,
    PlatformIcon,
    SearchIcon,
    ServiceIcon,
} from "@/components/icons";
import fuse from "@/utils/fuse";
import { TDocument, DocumentType } from "@/utils";
import { FuseResult } from "fuse.js";

const ResultsContext = React.createContext<{
    results: TDocument[];
    setResults: React.Dispatch<React.SetStateAction<TDocument[]>>;
}>({ results: [], setResults: () => { } });

export const useResults = () => React.useContext(ResultsContext);

export const ResultsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [results, setResults] = React.useState<TDocument[]>([]);

    return (
        <ResultsContext.Provider value={{ results, setResults }}>
            {children}
        </ResultsContext.Provider>
    );
};


export default function SearchInput() {
    const { setResults } = useResults();
    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        
        const fuseResults: FuseResult<TDocument>[] = fuse.search(query);

        const results: TDocument[] = fuseResults.map(result => result.item);
        setResults(results);
    };

    return (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["option"]}>
                    Esc
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
            onChange={handleSearch}
        />
    );
}
export function ResultCard({ result, onClick }: { result: TDocument, onClick: () => void }) {
    const router = useRouter();
    const getIconByType = (type: DocumentType) => {
        switch (type) {
            case "company":
                return <ContactIcon />;
            case "platform":
                return <PlatformIcon />;
            case "services":
                return <ServiceIcon />;
            case "contact":
                return <ContactIcon />;
            default:
                return <ContactIcon />;
        }
    }

    const truncate = (text?: string, length: number = 100) => {
        if (!text) return "";

        return text.length > length ? text.substring(0, length) + "..." : text
    }

    return (
        <div
            key={result.id}
            className={clsx(
                "flex flex-row gap-2 bg-foreground-100 border border-default cursor-pointer",
                "rounded-2xl py-2 px-4",
                "hover:scale-[1.01] transition-transform duration-200",
            )}
            role="button"
            tabIndex={0}
            onClick={() => {
                if (result.href) {
                    router.push(result.href);
                    onClick();
                }
            }}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    if (result.href) {
                        router.push(result.href);
                        onClick();
                    }
                }
            }}
        >
            {getIconByType(result.type)}
            <div className="flex flex-col gap-1">
                <h2 className="font-bold">{result.title}</h2>
                <p className="text-default-500">{truncate(result.body, 100)}</p>
            </div>
        </div>
    )

}

export function SearchDialog() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { results } = useResults();
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                onOpen();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onOpen]);

    return (
        <>
            <Button
                aria-label="Search"
                className="text-sm bg-default-100 hover:bg-default-200"
                endContent={
                    <Kbd className="hidden lg:inline-block" keys={["ctrl"]}>
                        K
                    </Kbd>
                }
                size="sm"
                radius="md"
                startContent={
                    <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
                onClick={onOpen}
            >
                Search
            </Button>
            <Modal
                isOpen={isOpen}
                placement="center"
                size="lg"
                classNames={{
                    base: "bg-foreground-100/50  backdrop-blur-[64px]",
                }}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    <ModalHeader>
                    </ModalHeader>
                    <ModalBody>
                        <SearchInput />
                        {results.map((result) => (
                            <ResultCard key={result.id} result={result} onClick={onClose} />
                        ))}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}