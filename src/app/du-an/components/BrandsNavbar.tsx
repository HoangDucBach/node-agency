'use client';

import { TBrandData } from "@/types";
import { Listbox, ListboxItem } from "@nextui-org/listbox";

export function BrandsNavbar({ data }: { data: TBrandData[] }) {
    return (
        <Listbox
            aria-label="brands"
        >
            {data.map((item, index) => (
                <ListboxItem
                    key={index}
                    value={item.name}
                    startContent={
                        <img
                            src={
                                "/assets/logo-" + item.name.toLowerCase().replace(' ', '-') + ".png"
                            }
                            alt={item.name}
                            className="max-h-8 rounded-full object-cover"
                        /> ||
                        <img
                            src={
                                "/assets/logo-" + item.name.toLowerCase().replace(' ', '-') + "svg"
                            }
                            alt={item.name}
                            className="max-h-8 rounded-full object-cover"
                        /> ||
                        <img
                            src={
                                "/assets/logo-" + item.name.toLowerCase().replace(' ', '-') + ".jpg"
                            }
                            alt={item.name}
                            className="max-h-8 rounded-full object-cover"
                        />
                    }
                >
                    {item.name}
                </ListboxItem>
            ))}
        </Listbox>
    );
}