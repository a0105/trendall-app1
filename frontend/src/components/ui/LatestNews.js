import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function LatestNews() {
  return (
    <>
      <div className="container mx-auto px-5 pb-8">
        <div className="mb-4 mt-16 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Latest news</h2>
          <Link to="/news" className={buttonVariants({ variant: "outline" })}>
            View all
          </Link>
        </div>

        <div className="flex flex-row justify-between  ">
          <Card className="ml-0 md:mr-5">
            <img
              src="https://placehold.co/600x400"
              className="max-h-[400] w-full max-w-[600] rounded-t-sm object-contain"
              alt="dfds"
            />
            <CardHeader>
              <CardTitle className="text-2xl">Untitled</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardDescription>
                <p className=" text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi at animi minima consectetur facere...
                </p>
              </CardDescription>
              <div className="flex flex-col space-y-3">
                <Link to="#" className={buttonVariants({ variant: "outline" })}>
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hidden md:block">
            <img
              src="https://placehold.co/600x400"
              className="w-full rounded-t-sm object-fill"
              alt="dfds"
            />
            <CardHeader>
              <CardTitle className="text-2xl">Untitled</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardDescription>
                <p className=" text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi at animi minima consectetur facere...
                </p>
              </CardDescription>
              <div className="flex flex-col space-y-3">
                <Link to="#" className={buttonVariants({ variant: "outline" })}>
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="ml-0 hidden md:ml-5 md:block">
            <img
              src="https://placehold.co/600x400"
              className="w-full rounded-t-sm object-fill"
              alt="dfds"
            />
            <CardHeader>
              <CardTitle className="text-2xl">Untitled</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardDescription>
                <p className=" text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi at animi minima consectetur facere...
                </p>
              </CardDescription>
              <div className="flex flex-col space-y-3">
                <Link to="#" className={buttonVariants({ variant: "outline" })}>
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
