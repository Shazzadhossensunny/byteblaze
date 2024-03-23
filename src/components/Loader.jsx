import { ScaleLoader } from "react-spinners";


export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center minHeight">
        <ScaleLoader size={100} color="#ff00d3" />
    </div>
  )
}
