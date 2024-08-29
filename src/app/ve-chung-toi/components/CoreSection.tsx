'use client';
import { TCompanyData } from "@/types";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

interface CoreCardProps {
    title: string;
    descriptions: string[];
    index?: number;
}

function getImage(index: number) {
    const images = [
        '/assets/image-effective-3d.jpg',
        '/assets/image-trust-3d.jpg',
        '/assets/image-research-3d.jpg',
    ];

    return images[index];
}

function CoreCard({ title, descriptions, index }: CoreCardProps) {
    const image = getImage(index || 0);
    const titleLines = title.split('\n');

    return (
        <motion.div
            className="w-full aspect-video flex flex-row justify-start items-center p-8"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '32px',
                filter: 'brightness(0.95)',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            aria-label="Core card"
        >
            <div className="flex flex-col items-start p-8 justify-center gap-4 max-w-screen-sm">

                <h3 className="font-bold text-2xl md:text-4xl text-white/95">
                    {titleLines.map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h3>
                {
                    descriptions.map((value: any, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-white">
                            <GoDotFill className="text-primary" />
                            <p className="text-base md:text-lg text-white break-words w-full">{value}</p>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default function CoreSection({ data }: { data: TCompanyData }) {
    const cores = [
        {
            title: "Brand: VITADAIRY COLOS FRESH MILK",
            descriptions: [
                "Quản lý Đại sứ thương hiệu Gia đình Hồ Ngọc Hà trong 3 năm liên tiếp",
                "Lập kế hoạch và thực thi truyền thông với các KOL",
                "Sản xuất TVC, KV"
            ]
        },
        {
            title: "Brand: FWD VIỆT NAM \n Campaign: CHUYẾN XE XUYÊN VIỆT",
            descriptions: [
                "Quản lý và hợp tác với 10 nghệ sĩ nổi tiếng; 10 câu chuyện “Tiến bước sống đầy” từ dân địa phương; 10 tấm gương học sinh truyền cảm hứng; 10 nhân vật “Tiến bước sống đầy ở Việt Nam",
                "Tăng độ nhận diện qua 51 hình ảnh, video của influencers",
                "Lan tỏa trên 41 trang cộng đồng"
            ]
        },
        {
            title: "BRAND: VP BANK \n Campaign: Thay đổi diện mạo - Kiến tạo thành công",
            descriptions: [
                "Xây dựng big concept cho chiến dịch",
                "Tổ chức quản lý sự kiện",
                "Sản xuất TVC",
                "Diễu hành xe bus, tăng độ nhân diện"
            ]
        }
    ]
    return (
        <section id='cot-loi' className="w-full flex flex-col items-center gap-8">
            {
                cores && cores.map((coreValue, index) => (
                    <CoreCard
                        key={index}
                        title={coreValue.title}
                        descriptions={coreValue.descriptions}
                        index={index}
                    />
                ))
            }
        </section>
    )
}