import Link from "next/link";
import Image from "next/image";

export type SockProps = {
  color: string;
  material: string;
  size: string;
};

export default function Page(props: SockProps) {
  const { color, material, size } = props;

  const colors = ["red", "blue", "green"];
  const sizes = ["xs", "s", "m", "l", "xl", "xxl"];
  const materials = ["cotton", "synthetic"];

  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
      <div className="">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-center">
            Configure Your Socks
          </h1>
          <div className="py-6 space-y-4">
            {/* Display the image based on the selected color */}
            <div className="flex justify-center">
              <Image
                src={`/${color}sock.png`}
                alt={`${color} sock`}
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">Color</h2>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <Link
                    key={c}
                    href={`/socks/${c}/${size}/${material}`}
                    className={`btn  ${c === color ? "btn-active" : ""}`}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium">Size</h2>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <Link
                    key={s}
                    href={`/socks/${color}/${s}/${material}`}
                    className={`btn  ${s === size ? "btn-active" : ""}`}
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium">Material</h2>
              <div className="flex flex-wrap gap-2">
                {materials.map((m) => (
                  <Link
                    key={m}
                    href={`/socks/${color}/${size}/${m}`}
                    className={`btn  ${m === material ? "btn-active" : ""}`}
                  >
                    {m}
                  </Link>
                ))}
              </div>
            </div>
            <button className="btn btn-primary w-full mt-6">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
