"use client";

import { useActionState } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CheckCircle, Loader2, XCircle } from "lucide-react";

type ActionState = {
    error?: string;
    success?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};

// const action = async (currentState: ActionState, formData: FormData) => {
//     console.log(formData.get("email"));
//     return { error: "Please check condition to move forward" };
// };

export const ClaimModal = () => {
    const [state, formAction, isPending] = useActionState<ActionState, FormData>(
        (state, formData) => {
            const checked = formData.get("accept-t&c") as string;
            const email = formData.get("email") as string;

            console.log({ checked, email });

            if (!checked || checked === "off") {
                return {
                    error: "Please select the condition before proceed",
                };
            }

            // Submit the form
            return {
                success: "Sent! please check your email",
            };
        },
        {
            error: "",
        }
    );

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="">
                    Get this Voucher
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Get your voucher</DialogTitle>
                    <DialogDescription>
                        We&apos;ll send this voucher to your email
                    </DialogDescription>
                </DialogHeader>
                <form className="space-y-4" action={formAction}>
                    <div className="space-y-1">
                        <Label htmlFor="username" className="text-right text-xs">
                            Email Address
                        </Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div>
                        <label className="flex items-start gap-2 select-none">
                            <input type="checkbox" name="accept-t&c" autoComplete="off" />
                            <p className="text-xs text-neutral-300 ">
                                I&apos;ll use this voucher or release it back to the pool if i
                                change my mind
                            </p>
                        </label>
                    </div>
                    {state.error && (
                        <div className="text-red-50 bg-red-900 flex items-center gap-1.5 p-2 rounded-sm">
                            <XCircle className="w-4 h-4" />
                            <p className=" text-sm font-medium">{state.error}</p>
                        </div>
                    )}

                    {state.success && (
                        <div className="text-green-50 bg-green-900 flex items-center gap-1.5 p-2 rounded-sm">
                            <CheckCircle className="w-4 h-4" />
                            <p className=" text-sm font-medium ">{state.success}</p>
                        </div>
                    )}
                    <DialogFooter>
                        {/* <Button variant={"outline"} type="submit">
                        Cancel
                        </Button> */}
                        <Button type="submit">
                            {isPending ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                    Sending...
                                </>
                            ) : (
                                "Send to my email"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};
