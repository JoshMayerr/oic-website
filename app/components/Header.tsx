import Image from "next/image";
import Link from "next/link";

async function getGitHubStars() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/joshmayerr/oic",
      { next: { revalidate: 14400 } } // Revalidate every 4 hours
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return null;
  }
}

export default async function Header() {
  const stars = await getGitHubStars();

  return (
    <>
      <div className="my-6">
        <Image
          className="rounded-lg border border-gray-200"
          src="/OCTO.png"
          alt="Open Interview Coder logo"
          width={80}
          height={80}
          priority
        />
      </div>

      <header className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
        <Link href="/">
          <h1 className="text-xl font-medium">Open Interview Coder</h1>
        </Link>

        <nav className="flex gap-6 sm:gap-8 mb-6">
          <a
            href="https://github.com/joshmayerr/oic"
            className="flex items-center"
          >
            <span className="mr-1 hover:underline">GitHub</span>
            {stars !== null && (
              <span className="ml-1.5 px-1.5 py-0.5 text-xs bg-gray-100 rounded-full">
                {stars} ⭐
              </span>
            )}
          </a>
          <Link href="/why" className="hover:underline">
            Why
          </Link>
        </nav>
      </header>
    </>
  );
}
