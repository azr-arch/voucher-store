"use client";

import { type SeedFormValues, seedFormSchema } from "@/lib/validation";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { CalendarIcon, CheckCircle, Plus, Trash2, XCircle } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn, formatDate } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { useForm } from "react-hook-form";
import { seedFormAction } from "@/actions/seed-form-action";
import { useState } from "react";

export const SeedForm = () => {
    const [state, setState] = useState<{ status: "success" | "error" | ""; message: string }>({
        status: "",
        message: "",
    });

    const form = useForm<SeedFormValues>({
        resolver: zodResolver(seedFormSchema),
        defaultValues: {
            offerTitle: "",
            brand: "",
            brandLogoUrl: "",
            details: [""],
            howtoredeem: [""],
            expiryDate: (() => {
                const expiryDate = new Date();
                expiryDate.setDate(expiryDate.getDate() + 1);
                return expiryDate;
            })(),
            code: "",
        },
    });

    const addField = (type: "details" | "howtoredeem") => {
        switch (type) {
            case "details":
                const currentDetails = form.getValues("details");
                form.setValue("details", [...currentDetails, ""]);
                break;
            case "howtoredeem":
                const currentHowtoredeem = form.getValues("howtoredeem");
                form.setValue("howtoredeem", [...currentHowtoredeem, ""]);
                break;

            default:
                return;
        }
    };

    const removeField = (index: number, type: "details" | "howtoredeem") => {
        switch (type) {
            case "details":
                const currentDetails = form.getValues("details");
                if (currentDetails.length > 1) {
                    form.setValue(
                        "details",
                        currentDetails.filter((_, idx) => idx !== index)
                    );
                }
                break;
            case "howtoredeem":
                const currentHowtoredeem = form.getValues("howtoredeem");
                if (currentHowtoredeem.length > 1) {
                    form.setValue(
                        "howtoredeem",
                        currentHowtoredeem.filter((_, idx) => idx !== index)
                    );
                }
                break;

            default:
                return;
        }
    };

    const onSubmit = async (values: SeedFormValues) => {
        try {
            console.log({ values });
            const data = await seedFormAction(values);
            setState(data);

            form.reset();
        } catch {
            setState({
                status: "error",
                message: "Internal server error",
            });
        }
    };

    const isSubmitting = form.formState.isSubmitting;

    return (
        <Card className="w-full max-w-3xl mx-auto pt-10 ">
            <CardHeader>
                <CardTitle className="text-2xl">Add New Voucher</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onChange={() => {
                            if (state.message) {
                                setState({ status: "", message: "" });
                            }
                        }}
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        {state.status === "error" && (
                            <div className="text-red-50 bg-red-900 flex items-start gap-1.5 p-2 rounded-sm">
                                <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <p className=" text-sm font-medium">{state.message}</p>
                            </div>
                        )}

                        {state.status === "success" && (
                            <div className="text-green-50 bg-green-900 flex items-start gap-1.5 p-2 rounded-sm">
                                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <p className=" text-sm font-medium ">{state.message}</p>
                            </div>
                        )}

                        <FormField
                            control={form.control}
                            name="offerTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Offer Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter offer title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Code</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter redeem code" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="brand"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Brand</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter brand name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="brandLogoUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Brand Logo URL (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter brand logo URL" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Provide a URL to the brand&apos;s logo image
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label>Details</Label>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => addField("details")}
                                    className="flex items-center gap-1"
                                >
                                    <Plus className="h-4 w-4" /> Add Detail
                                </Button>
                            </div>

                            {form.watch("details").map((_, index) => (
                                <div key={`detail-${index}`} className="flex items-center gap-2">
                                    <FormField
                                        control={form.control}
                                        name={`details.${index}`}
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormControl>
                                                    <Input
                                                        placeholder={`Detail ${index + 1}`}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {form.watch("details").length > 1 && (
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeField(index, "details")}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label>How to Redeem</Label>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => addField("howtoredeem")}
                                    className="flex items-center gap-1"
                                >
                                    <Plus className="h-4 w-4" /> Add Step
                                </Button>
                            </div>

                            {form.watch("howtoredeem").map((_, index) => (
                                <div key={`redeem-${index}`} className="flex items-center gap-2">
                                    <FormField
                                        control={form.control}
                                        name={`howtoredeem.${index}`}
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormControl>
                                                    <Input
                                                        placeholder={`Step ${index + 1}`}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {form.watch("howtoredeem").length > 1 && (
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeField(index, "howtoredeem")}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <FormField
                            control={form.control}
                            name="expiryDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Expiry Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        formatDate(field.value)
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                                disabled={(date) => date < new Date()}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end">
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
