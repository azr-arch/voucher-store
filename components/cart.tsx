"use client";

// import Image from 'next/image';
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { ChevronRight, Trash2Icon } from "lucide-react";
// import { useCart } from './cart-context';
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { Button } from "./ui/button";
// import { SIZES } from './add-to-cart';

export function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { cart, removeFromCart } = useCart();

    const totalPrice = cart.reduce((sum, item) => sum + item.value, 0);

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="">
                <SheetTitle className="sr-only">Cart</SheetTitle>
                <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-auto py-6 px-8">
                        {cart.map((item) => (
                            <div key={`${item.id}`} className="flex gap-4 py-6 first:pt-0">
                                <div className="relative aspect-square h-[120px] rounded-sm bg-[#FFFFFF]">
                                    {/* <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    loading="eager"
                    decoding="sync"
                  /> */}
                                </div>
                                <div className="flex flex-col justify-between py-1 flex-1 h-full">
                                    <div className="h-full">
                                        <p className=" uppercase text-xs text-neutral-400 font-medium mb-2">
                                            {item.id}
                                        </p>
                                        <p className="text-neutral-300 mb-4 text-balance">
                                            {item.offer}
                                        </p>

                                        {/* <p className="font-mono">
                      $
                      {item.id.startsWith('sk')
                        ? item.id.includes('gray')
                          ? '40'
                          : '20'
                        : '20'} 
                    </p> */}

                                        <div className="flex items-center justify-between ">
                                            <span className="font-geist-mono text-sm font-medium">
                                                ${item.value}
                                            </span>

                                            <Button
                                                variant={"outline"}
                                                size={"icon"}
                                                className="rounded-[4px]"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <Trash2Icon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t">
                        <div className="p-8 space-y-4">
                            <div className="flex justify-between items-center">
                                <p className="font-mono uppercase">Total</p>
                                <p className="font-mono">${totalPrice}</p>
                            </div>
                            <p className="font-mono text-sm text-muted-foreground">
                                TAX AND SHIPPING NOT INCLUDED
                            </p>
                            <Link
                                href="#"
                                className="w-full flex items-center justify-between hover:border-neutral-100 border bg-black text-white p-4 font-mono"
                            >
                                CONTINUE
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
