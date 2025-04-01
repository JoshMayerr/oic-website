export default function WhyPage() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto p-4 sm:p-8 text-sm">
      <h1 className="text-xl font-medium mb-6">Why Open Interview Coder?</h1>

      <p className="mb-4">
        The technical interview process is broken. It has devolved into a game
        of memorization and pattern recognition rather than a genuine assessment
        of problem-solving skills.
      </p>

      <p className="mb-4">
        Companies expect candidates to spend hundreds of hours memorizing
        algorithms and data structures for problems they will likely never
        encounter in their actual work.
      </p>

      <p className="mb-4">
        Open Interview Coder was created to level the playing field. In the real
        world, engineers use search engines, documentation, and AI tools to
        solve problems efficiently. Why should interviews be any different?
      </p>

      <p className="mb-4">
        This tool helps candidates focus on demonstrating their true engineering
        skills: understanding problems, communicating effectively, and
        implementing solutions - rather than rote memorization.
      </p>

      <p className="mb-4">
        By making this tool free and open source, we're advocating for a more
        fair and realistic interview process that values practical
        problem-solving over theoretical knowledge.
      </p>

      <p className="mb-8">
        The best engineers aren't those who memorize algorithms - they're the
        ones who know how to find and apply solutions effectively.
      </p>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="font-medium mb-4">Our Principles</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Interviews should assess real-world engineering skills</li>
          <li>Access to information is part of modern engineering</li>
          <li>
            Everyone deserves equal opportunities regardless of background
          </li>
          <li>
            Technical interviews should be about problem-solving, not
            memorization
          </li>
        </ul>
      </div>
    </div>
  );
}
