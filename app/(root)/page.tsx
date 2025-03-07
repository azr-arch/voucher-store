import VoucherList from "../../components/VoucherList";
import { getAllVouchers } from "@/lib/queries";

export default async function Home() {
    const vouchers = await getAllVouchers();

    return <VoucherList vouchers={vouchers} />;
}
