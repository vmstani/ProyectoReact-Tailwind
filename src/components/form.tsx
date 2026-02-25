
import { Button } from "./button"
import { useState } from "react"

export const Form = () => {

  const [inputValue,setInputValue] = useState<string>('');
  const [error,setError] = useState<boolean>(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = regex.test(inputValue);
  if (!isValidEmail) {
    setError(true);
  } else {
      alert("Email submitted: " + inputValue);
      setError(false);
    }
}

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  return (
    <div className="mb-[300px] absolute top-[-200px] left-0 right-0 text-center py-10 px-6 bg-Navy-850 rounded-[9px] w-[336px] mx-auto md:w-[480px] lg:w-[640px] xl:w-[720px]">
        <h2 className="font-bold mb-4 text-[1.25rem]">Get early access today</h2>

        <p className="text-sm mb-8"> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row md:gap-4 md:items-center" action="">

            <input onChange={handleChange} value={inputValue} className="bg-white rounded-3xl placeholder:text-gray-400 text-black text-center md:text-left h-20 md:h-12 flex-1 px-6 text-lg" 
            type="email" name="email"  placeholder="ejemplo@gmail.com" required/>

            {error && <p className="text-red-500 text-sm mt-[-12px] ">Please provide an valid Email</p>}

            <Button style="xl:w-[200px] md:w-auto h-12" text="Get Started For Free" />
        </form>
    </div>
  )
}
