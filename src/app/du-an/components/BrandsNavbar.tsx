'use client';

import { LogoBrand } from "@/components/brand";
import { TBrandData } from "@/types";
import { Listbox, ListboxItem } from "@nextui-org/listbox";

export default function BrandsNavbar({ data }: { data: TBrandData[] }) {
    return (
        <Listbox
            aria-label="brands"
        >
            {data.map((item, index) => (
                <ListboxItem
                    key={index}
                    value={item.name}
                    startContent={
                        <LogoBrand name="logo" className="w-8 aspect-square rounded-full object-fill bg-foreground-100" />
                    }
                >
                    {item.name}
                </ListboxItem>
            ))}
        </Listbox>
    );
}