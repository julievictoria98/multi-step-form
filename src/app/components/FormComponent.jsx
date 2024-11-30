"use client";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { actionSubmit } from "../../../actions";

const FormComponent = () => {
  const { pending } = useFormStatus();
  const searchParams = useSearchParams();
  const number = searchParams.get("number");
  const numberOfInputs = Number(number);
  const [state, formAction] = useActionState(actionSubmit);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-semibold text-2xl">
        Informationoplysninger på nisserne
      </h1>
      <form action={formAction}>
        <div className="grid col-1 gap-4 ">
          {[...Array(numberOfInputs)].map((_, index) => (
            <div key={index} className="flex flex-col">
              <div className="inline-flex items-start flex-col gap-4">
                <div className="flex flex-col gap-1 ">
                  <label>Navn På Modtager {index + 1} Information:</label>
                  <input
                    className="border-2 border-black rounded-md pl-1"
                    type="text"
                    name="name"
                    placeholder="Udfyld Navn"
                    defaultValue={state?.name}
                  />
                  <p className="bg-red-100 text-red-950">
                    {state?.errors && state.errors.name}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <label> Email På Modtager{index + 1} Information:</label>
                  <input
                    className="border-2 border-black rounded-md pl-1"
                    type="email"
                    name="email"
                    placeholder="Udfyld Email"
                    defaultValue={state?.email}
                  />
                  <p className="bg-red-100 text-red-950">
                    {state?.errors && state.errors.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-red-700"
        >
          {pending ? "sumbitting..." : "submit"}
        </button>
        <p>{state?.success && state.success.message}</p>
        {state?.errors && state.errors.submit && (
          <p className="text-red-500 text-sm mt-2">{state.errors.submit}</p>
        )}
      </form>
    </div>
  );
};

export default FormComponent;
