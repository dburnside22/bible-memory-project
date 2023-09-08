import Button from "./components/Button/button";
import Card from "./components/Card/card";

export default function Home() {
  return (
    <main>
      <h1 className="mt-10 text-3xl font-semibold text-center text-gray-800">
        Welcome to the Bible Memory Project
      </h1>

      <Card
        letters="FGSLTWTHGHOBSTWBIHSNPBHEL"
        verse="For God so loved the world that He gave His only begotten son that whoever believes in Him shall not perish but have eternal life"
        verseLabel="John 3:16"
      />

      <div className="flex justify-between mx-3 mt-5">
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </main>
  );
}
