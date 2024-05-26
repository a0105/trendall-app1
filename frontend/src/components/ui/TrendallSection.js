import React from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";
import { Separator } from "../ui/separator";

const TrendalSection = () => {
  return (
    <div>
      <section>
        <div className=" container mx-auto w-full max-w-4xl px-5 py-12 md:px-10 ">
          <div className="mb-10">
            <p className="mb-1 font-serif italic">1909 to 1995</p>

            <h1 className="font-heading mb-4 pb-3 text-2xl font-bold tracking-tight sm:text-4xl">
              The Legacy of Arthur Dale Trendall
            </h1>
            <p className="mb-5 text-base  lg:text-lg">
              A.D. (Dale) Trendall was a legendary figure and one of the
              foremost historians of Greek art of the 20th century. He was the
              principal authority on the red-figure vases produced in the Greek
              colonies and native areas of South Italy and Sicily during the 5th
              and 4th centuries BCE. He also exerted a profound influence upon
              the study of the Humanities generally, and of Classical
              civilisation specifically, in Australian universities for over
              half a century.
            </p>

            <HoverCard>
              <HoverCardTrigger>
                <img
                  className="inline-block h-full w-full rounded-lg object-cover md:h-[400px] "
                  src="https://content.ngv.vic.gov.au/col-images/api/EPUB001746/1920"
                  alt=""
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <div>
                  <p className="font-semibold underline">
                    Prof. A. D. Trendall{" "}
                  </p>
                  <p> Photograph Courtesy of Latrobe University, Melbourne.</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="">
            <p className="mb-6  text-base  lg:text-lg">
              Trendall was born in Glenmore (Auckland), New Zealand, on 28
              March, 1909, and died in Melbourne, Australia, on 13 November,
              1995. He was educated at King's College in Auckland (1916-1925);
              the University of New Zealand (now the University of Otago) in
              Dunedin (1926-1929); and at Trinity College in the University of
              Cambridge (1931-1933). In 1939 he accepted an invitation to take
              up the position of Professor of Greek in the University of Sydney,
              a position he held until 1954, concurrently from 1948 with the
              newly established Chair of Archaeology. For fifteen years
              (1954-1969) he was the first Master of University House at the
              Australian National University in Canberra. He retired from
              teaching and administration in 1960 to become Resident Fellow of
              La Trobe University in Melbourne, where he remained for some 26
              years.
            </p>

            <p className="  text-base  lg:text-lg">
              His academic life was devoted primarily to the study of the
              red-figured vases produced in South Italy and Sicily during the
              Classical period. Decorated with scenes of myth or everyday life
              these vases, thousands of which are scattered in museums
              throughout the world, constitute a primary source for many aspects
              of Greek and indigenous culture in Italy. At the beginning of his
              career Trendall set himself the task of distinguishing the various
              local red-figure styles, and of attributing, through careful
              stylistic analysis, the vases to painters. That the basic
              classification has now been established, and we are able to
              appreciate the work of many individual painters, is largely the
              result of Trendall's unremitting scholarly activity over some 60
              years.
            </p>
            <div className="mx-auto max-w-2xl">
              <h3 className="mb-2 mt-6 text-center text-2xl font-bold">
                Publications
              </h3>

              <div className="py-2">
                <Separator></Separator>
              </div>
              <div className="items-center space-y-1 text-left md:text-center">
                <p>Paestan Pottery (BSR 1936)</p>
                <p>
                  Handbook to the Nicholson Museum (University of Sydney, 2nd
                  ed. 1948)
                </p>
                <p>
                  Vasi antichi dipinti del Vaticano. Vasi italioti ed etruschi a
                  figure rosse (Città del Vaticano 1953)
                </p>
                <p>
                  The Red-figured Vases of Lucanian, Campania, and Sicily
                  (Clarendon Press 1967)
                </p>
                <p>
                  Phlyax Vases (Institute of Classical Studies, 2nd ed. 1967)
                </p>
                <p>
                  Illustrations of Greek Drama (Phaidon 1971) - with T.B.L.
                  Webster
                </p>
                <p>
                  Greek Vases in the Logie Collection (University of Canterbury
                  1971)
                </p>
                <p>
                  Early South Italian Vase-painting (Philipp von Zabern, rev.
                  ed. 1974)
                </p>
                <p>
                  Greek Vases in the National Gallery of Victoria (National
                  Gallery of Victoria 1978)
                </p>
                <p>
                  The Red-figured Vases of Apulia I-II (Clarendon Press
                  1978-1982) - with Alexander Cambitoglou
                </p>
                <p>The Red-figured Vases of Paestum (BSR 1987)</p>
                <p>
                  Greek Red-figured Fish-plates (Basel 1987) - with Ian McPhee
                </p>
                <p>
                  Red Figure Vases of South Italy and Sicily (Thames and Hudson
                  1989)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendalSection;
