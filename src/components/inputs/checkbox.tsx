import { useClickOutside } from "@/hooks/useClickOutside";
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import PrivacyTerms from "../privacy-terms";
import Link from "next/link";

interface CheckboxProps
  extends Omit<React.HTMLProps<HTMLInputElement>, "type"> {
  name: string;
}

export default function Checkbox({ name }: CheckboxProps) {
  const { control } = useFormContext();

  const [readTerms, setReadTerms] = useState<boolean>(false);

  useEffect(() => {
    console.log(readTerms);
  }, [readTerms]);

  return (
    <>
      <Controller
        render={({ field, fieldState: { error }, formState }) => (
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <input
                {...field}
                type="checkbox"
                className="p-3 border-primary border-[2px]"
              />
              <label className="flex items-baseline gap-1">
                <p>Li e concordo com a</p>
                <Link
                  className="underline-offset-4 underline"
                  href="/politica-de-privacidade"
                >
                  Política de Privacidade
                </Link>
              </label>
            </div>
            <div className="text-red-500">{error?.message}</div>
          </div>
        )}
        name={name}
        control={control}
      />
      {readTerms && (
        <div className="fixed top-0 left-0 right-0 z-50 h-screen w-screen flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-xl">
          <div className=" flex flex-col gap-4 max-h-[75vh] mx-auto sm:w-full px-4 sm:px-6 lg:w-[720px]">
            <div className="w-full flex justify-end">
              <button
                className="text-white"
                onClick={() => setReadTerms(false)}
              >
                Fechar
              </button>
            </div>
            <div className="overflow-auto rounded-md">
              <PrivacyTerms />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
