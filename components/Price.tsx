import { Check } from "lucide-react";
export default function Price() {
  return (
    <div className=" w-full ">
      <div className="grid grid-cols-2 grid-row-3 gap-4 ">
        <div className="bg-white ">
          <h1>Pricing</h1>
          <p>
            Take a look at some of our recent projects to see how we have helped
            businesses like yours succeed online.
          </p>
        </div>
        <div className="bg-white row-span-2 p-10">
          <h2>Unlimited Services</h2>
          <p>
            Take a look at some of our recent projects to see how we have helped
            businesses like yours succeed online.
          </p>
          <div className="flex flex-row gap-20">
            <div>
              <div className="flex flex-row gap-2">
                <div className="border-2 border-black rounded-full flex justify-center items-centerS">
                  <Check color="black" />
                </div>
                <p>Unlimited requests</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="border-2 border-black rounded-full flex justify-center items-centerS">
                  <Check color="black" />
                </div>
                <p>Unlimited requests</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="border-2 border-black rounded-full flex justify-center items-centerS">
                  <Check color="black" />
                </div>
                <p>Unlimited requests</p>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-2">
                <div className="border-2 border-black rounded-full flex justify-center items-centerS">
                  <Check color="black" />
                </div>
                <p>Unlimited requests</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="border-2 border-black rounded-full flex justify-center items-centerS">
                  <Check color="black" />
                </div>
                <p>Unlimited requests</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="border-2 border-black rounded-full flex justify-center items-centerS">
                  <Check color="black" />
                </div>
                <p>Unlimited requests</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <h2>Let’s Schedule a Meeting</h2>
          <button>Schedule Meeting</button>
        </div>
      </div>
    </div>
  );
}
