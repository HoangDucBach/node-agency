import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@nextui-org/button";


import { TAboutData } from "@/types";
import { Link } from "@nextui-org/link";

export default function AboutCard({ data }: { data: TAboutData }) {

    return (
        <motion.div
            className="flex flex-col items-center md:items-end justify-center gap-4 w-full h-fit"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <h2 className="text-4xl text-default-foreground font-bold">Về chúng tôi</h2>
            <p dangerouslySetInnerHTML={{ __html: data.description }} className="!w-full max-w-[20em] break-words text-center md:text-end" />
            <Button
                as={Link}
                color="default"
                radius="full"
                variant="ghost"
                href="../ve-chung-toi"
                endContent={<FaArrowRightLong />}
            >
                Xem thêm
            </Button>

        </motion.div>
    );
}