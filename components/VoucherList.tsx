import VoucherCard from "./VoucherCard";

// Mock data for vouchers from different brands
const voucherData = [
    {
        id: "nike-01",
        brand: "Nike",
        offer: "20% off on all sportswear",
        value: 50,
        expiry: "30 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-blue-600 to-blue-800",
    },
    {
        id: "adidas-01",
        brand: "Adidas",
        offer: "Free shipping on orders over $100",
        value: 75,
        expiry: "60 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-green-600 to-green-800",
    },
    {
        id: "puma-01",
        brand: "Puma",
        offer: "Buy one get one free on selected items",
        value: 100,
        expiry: "45 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-red-600 to-red-800",
    },
    {
        id: "reebok-01",
        brand: "Reebok",
        offer: "$25 off on orders over $150",
        value: 25,
        expiry: "30 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-purple-600 to-purple-800",
    },
    {
        id: "nb-01",
        brand: "New Balance",
        offer: "15% off on running shoes",
        value: 40,
        expiry: "90 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-yellow-600 to-yellow-800",
    },
    {
        id: "ua-01",
        brand: "Under Armour",
        offer: "$30 off on orders over $200",
        value: 30,
        expiry: "60 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-orange-600 to-orange-800",
    },
    {
        id: "converse-01",
        brand: "Converse",
        offer: "Free customization on any purchase",
        value: 60,
        expiry: "30 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-pink-600 to-pink-800",
    },
    {
        id: "vans-01",
        brand: "Vans",
        offer: "10% off on all footwear",
        value: 35,
        expiry: "45 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-teal-600 to-teal-800",
    },
];

export default function VoucherList() {
    return (
        <>
            <h2
                //   initial={{ opacity: 0, y: 10 }}
                //   animate={{ opacity: 1, y: 0 }}
                //   exit={{ opacity: 0, y: -10 }}
                //   transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-2"
            >
                Available Vouchers
            </h2>
            <p
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                //   exit={{ opacity: 0 }}
                //   transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 mb-12"
            >
                Select a voucher to view details
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {voucherData.map((voucher) => (
                    <VoucherCard key={voucher.id} voucher={voucher} />
                ))}
            </div>
        </>
    );
}
