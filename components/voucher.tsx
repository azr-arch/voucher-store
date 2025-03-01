import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { IVoucher } from "./VoucherCard";
import { motion } from "motion/react";

export const Voucher = ({ voucher }: { voucher: IVoucher }) => {
    return (
        <motion.div
            className={cn(
                `w-full  max-w-md aspect-[2/1] rounded-xl bg-gradient-to-br p-0.5 shadow-lg mx-auto`
            )}
            layout
        >
            <div className="text-white   rounded-[10px] p-4 h-full flex flex-col justify-between relative overflow-hidden">
                {/* <div className="absolute top-0 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full" />
                <div className="absolute bottom-0 left-1/2 w-8 h-8 -translate-x-1/2 translate-y-1/2 bg-gray-900 rounded-full" />
                <div className="absolute left-0 top-1/2 w-2 h-12 -translate-y-1/2 -translate-x-1/2 bg-gray-900 rounded-full" />
                <div className="absolute right-0 top-1/2 w-2 h-12 -translate-y-1/2 translate-x-1/2 bg-gray-900 rounded-full" /> */}

                <div className="flex justify-between items-start">
                    {/* <Image
              src={logo || "/placeholder.svg"}
              alt={brand}
              width={80}
              height={40}
              className="h-6 w-auto object-contain"
            /> */}
                    {/* <Badge variant="outline" className="text-xs px-2 py-0.5 bg-white/10 border-0"> */}
                    ${voucher.value}
                    {/* </Badge> */}
                </div>

                <div className="text-center my-2">
                    <motion.h2
                        className="text-lg font-medium mb-1 text-neutral-300"
                        layout="position"
                    >
                        {voucher.offer}
                    </motion.h2>
                    {/* {isDetailed && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-600 text-sm">
                Use code: <span className="font-mono text-gray-900">{code}</span>
              </motion.p>
            )} */}
                </div>

                <motion.div
                    className="flex justify-between items-center text-xs text-gray-500"
                    layout="position"
                >
                    <span>Valid for {voucher.expiry}</span>
                    <span>{voucher.brand}</span>
                </motion.div>
            </div>
        </motion.div>
    );
};
