interface Props {
    text: string;
    style?: string;
}

 export const Button = ({ text, style='' }: Props) => {
  return (
    <button className={`bg-linear-to-b from-teal-200 to-cyan-500  h-12 ${style} rounded-3xl hover:to-Teal-200 cursor-pointer `}>{text}</button>
  )
}

