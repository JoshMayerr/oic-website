import Image from "next/image";

export default function Home() {
  return (
    <>
      <p className="mb-8 mt-2">
        A free and open source desktop app that assists you on all coding
        interviews. Undetectable by all screen sharing applications. Cuz f*ck
        leetcode. Ace all of your coding interviews with the help of any LLM you
        want. You literally don't have to study anymore.
      </p>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <a href="/download" className="block w-full">
          <div className="bg-gradient-to-b from-[#4d8cf4] via-[#3b7eea] to-[#2a6de0] hover:from-[#5999ff] hover:via-[#4c8aee] hover:to-[#3a7df0] p-3 px-5 rounded-md text-center mb-4 sm:mb-12 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border-t border-blue-300">
            <div className="flex items-center justify-center gap-3 font-medium text-white">
              <Image
                src="/apple.svg"
                className="text-white -translate-y-0.25"
                alt="Apple logo"
                width={14}
                height={14}
              />
              Download for Mac
            </div>
          </div>
        </a>
        <a href="/download" className="block w-full">
          <div className="bg-gradient-to-b from-[#4d8cf4] via-[#3b7eea] to-[#2a6de0] hover:from-[#5999ff] hover:via-[#4c8aee] hover:to-[#3a7df0] p-3 px-5 rounded-md text-center mb-4 sm:mb-12 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border-t border-blue-300">
            <div className="flex items-center justify-center gap-3 font-medium text-white">
              <Image
                src="/windows.svg"
                className="text-white -translate-y-0.25"
                alt="Windows logo"
                width={14}
                height={14}
              />
              Download for Windows
            </div>
          </div>
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="w-full">
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/demo.png"
              alt="Demo"
              fill
              className="bg-gray-200 rounded-lg"
            />
          </div>
          <p className="text-xs text-gray-500 mt-3">What you see.</p>
        </div>
        <div className="w-full">
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/demo.png"
              alt="Demo"
              fill
              className="bg-gray-200 rounded-lg"
            />
          </div>
          <p className="text-xs text-gray-500 mt-3">
            What your interviewer sees.
          </p>
        </div>
      </div>

      <h2 className="text-md font-semibold mb-6">
        Works on all interview software
      </h2>

      {/* table with app names and check marks */}
      <div className="overflow-x-auto">
        <table className="border-collapse w-full mb-6">
          <thead>
            <tr className="border border-gray-200">
              <th className="text-left py-2 px-4 font-medium border-l border-r border-gray-200 w-4/5">
                App Name
              </th>
              <th className="py-2 px-4 font-medium border-l border-r border-gray-200 w-1/5">
                Compatible
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 border-l border-r border-gray-200">
                CoderPad
              </td>
              <td className="text-center py-2 px-4 border-l border-r border-gray-200">
                ✅
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 border-l border-r border-gray-200">
                HackerRank
              </td>
              <td className="text-center py-2 px-4 border-l border-r border-gray-200">
                ✅
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 border-l border-r border-gray-200">
                LeetCode
              </td>
              <td className="text-center py-2 px-4 border-l border-r border-gray-200">
                ✅
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 border-l border-r border-gray-200">
                Zoom
              </td>
              <td className="text-center py-2 px-4 border-l border-r border-gray-200">
                ✅
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 border-l border-r border-gray-200">
                Google Meet
              </td>
              <td className="text-center py-2 px-4 border-l border-r border-gray-200">
                ✅
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 border-l border-r border-gray-200">
                Microsoft Teams
              </td>
              <td className="text-center py-2 px-4 border-l border-r border-gray-200">
                ✅
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-md font-semibold mb-6">How it works</h2>

      <div className="w-full">
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          A demo of it being used during an interview.
        </p>
      </div>

      {/* features */}
      <h2 className="text-md font-semibold mb-6 mt-12">Features</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-medium">Screen Sharing</h3>
          </div>
          <p className="text-gray-600 text-xs">
            Completely invisible during screen sharing. The app runs in the
            background without being detected.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-medium">Solution Reasoning</h3>
          </div>
          <p className="text-gray-600 text-xs">
            Every solution is explained step by step, and every line of code
            comes with comments explaining how it works.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-medium">Webcam Monitoring</h3>
          </div>
          <p className="text-gray-600 text-xs">
            Move the window around to overlay on top of your code editor so your
            eyes never wander.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-medium">Active Tab Detection</h3>
          </div>
          <p className="text-gray-600 text-xs">
            Toggle the visibility of the window while keeping your cursor on the
            interview tab.
          </p>
        </div>
      </div>

      {/* faq */}
      <h2 className="text-md font-semibold mb-6">FAQ</h2>
      <div className="flex flex-col gap-6">
        <div className="">
          <h3 className="text-sm mb-2">Is this free?</h3>
          <p className="text-gray-600 text-xs">
            Yes, it is free and open source.
          </p>
        </div>
        <div className="">
          <h3 className="text-sm mb-2">How is it undetectable?</h3>
          <p className="text-gray-600 text-xs">
            It uses a large combination of native APIs, settings, and configs to
            make sure it is not detected on screen shares.
          </p>
        </div>
        <div className="">
          <h3 className="text-sm mb-2">Why make this?</h3>
          <p className="text-gray-600 text-xs">
            Read{" "}
            <a href="/why" className="underline">
              here
            </a>
          </p>
        </div>
        <div className="">
          <h3 className="text-sm mb-2">I have a question</h3>
          <p className="text-gray-600 text-xs">
            Email me at{" "}
            <a href="mailto:josh@tollbit.com" className="hover:underline">
              josh@tollbit.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
