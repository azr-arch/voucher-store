"use server";

const sendEmail = async ({ userEmail }: { userEmail: string }) => {
    // Verify if its a valid email using abstract

    // use gmail apis for sending email
    // If verified return success message in object
    // else return error message object

    console.log(userEmail);
};

export const validateAction = async (state: any, formData: FormData) => {
    const checked = formData.get("accept-t&c") as string;
    const email = formData.get("email") as string;

    console.log({ checked, email });

    if (!checked || checked === "off") {
        return {
            error: "Please select the condition before proceed",
        };
    }

    try {
        await sendEmail({ userEmail: email });
        return {
            success: "Sent! please check your email",
        };
    } catch {
        return {
            error: "Internal server error",
        };
    }
};
