import { Button } from "@/components/ui/button"
import prisma from "@/lib/db"

export default function SeedDatabase() {
    async function postData() {
        "use server"
        await prisma.movie.createMany({
            data: [
                {
                    id: 0,
                    title: "Gran Turismo",
                    age: 12,
                    duration: 2.15,
                    overview: "some"
                    , vidoeSource:
                        "https://res.cloudinary.com/dsouibklx/video/upload/v1699471985/vxht66zpfit14wkgpj0a.mp4",
                    imageString:
                        "https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
                    release: 2023,
                    category: "recent",
                    youtubeString: "https://www.youtube.com/embed/GVPzGBvPrzw",
                },
                {
                    imageString:
                        "https://image.tmdb.org/t/p/original/kHlX3oqdD4VGaLpB8O78M25KfdS.jpg",
                    title: "A Haunting in Venice",
                    age: 12,
                    duration: 1.44,
                    id: 1,
                    overview: "some"
                    , release: 2023,
                    vidoeSource: "",
                    category: "recent",
                    youtubeString: "https://www.youtube.com/embed/yEddsSwweyE",
                },
                {
                    id: 2,
                    title: "Five Nights at Freddy's",
                    age: 16,
                    duration: 1.5,
                    overview: "some"
                    ,
                    release: 2023,
                    vidoeSource: "",
                    imageString:
                        "https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
                    category: "recent",
                    youtubeString: "https://www.youtube.com/embed/0VH9WCFV6XQ",
                },

                {
                    id: 3,
                    title: "The Blacklist",
                    age: 16,
                    duration: 0,
                    imageString:
                        "https://image.tmdb.org/t/p/original/dDPwCyZG8arYwMDoQl0sm4xccCE.jpg",
                    overview: "some"
                    ,
                    release: 2013,
                    vidoeSource: "",
                    category: "show",
                    youtubeString: "https://www.youtube.com/embed/-WYdUaK54fU",
                },
                {
                    id: 4,
                    title: "Suits",
                    age: 12,
                    duration: 0,
                    imageString:
                        "https://image.tmdb.org/t/p/original/or0E36KfzJYZwqXeiCfm1JgepKF.jpg",
                    overview: "some"
                    ,
                    release: 2011,
                    vidoeSource: "",
                    category: "show",
                    youtubeString: "https://www.youtube.com/embed/85z53bAebsI",
                },
                {
                    id: 5,
                    title: "Chernobyl",
                    age: 16,
                    duration: 0,
                    imageString:
                        "https://image.tmdb.org/t/p/original/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
                    overview: "some"
                    ,
                    release: 2019,
                    vidoeSource: "",
                    category: "show",
                    youtubeString: "https://www.youtube.com/embed/s9APLXM9Ei8",
                },
                {
                    id: 6,
                    title: "Retribution",
                    age: 12,
                    duration: 1.31,
                    imageString:
                        "https://image.tmdb.org/t/p/original/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",

                    overview: "some"
                    ,
                    release: 2023,
                    vidoeSource: "",
                    category: "recent",
                    youtubeString: "https://www.youtube.com/embed/jzQn0-WH4WM",
                },
                {
                    id: 7,
                    title: "Spider-Man: Across the Spider-Verse",
                    age: 12,
                    duration: 2.2,
                    imageString:
                        "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",

                    overview: "some"
                    ,
                    release: 2023,
                    vidoeSource: "",
                    category: "movie",
                    youtubeString: "https://www.youtube.com/embed/shW9i6k8cB0",
                },

                {
                    id: 8,
                    title: "Coco",
                    release: 2017,
                    age: 0,
                    duration: 1.45,
                    imageString:
                        "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
                    overview: "some"
                    ,
                    vidoeSource: "",
                    category: "movie",
                    youtubeString: "https://www.youtube.com/embed/xlnPHQ3TLX8",
                },
                {
                    id: 9,
                    title: "Monk",
                    release: 2002,
                    age: 12,
                    duration: 0,
                    imageString:
                        "https://image.tmdb.org/t/p/original/cTQYB39EwM01fl9b9KpNUgZfOsT.jpg",

                    overview: "some"
                    , vidoeSource: "",
                    category: "show",
                    youtubeString: "https://www.youtube.com/embed/mftbaaU82Uc",
                },
                {
                    id: 10,
                    title: "Family Guy",
                    age: 16,
                    duration: 0,
                    imageString:
                        "https://image.tmdb.org/t/p/original/y4PDksvxM05sNxacoU8xIYITCDA.jpg",

                    overview: "some"
                    ,
                    release: 1999,
                    vidoeSource: "",
                    category: "show",
                    youtubeString: "https://www.youtube.com/embed/7hRxWGo49oc",
                },
            ],
        })
    }
    return (
        <>
            <div className="m-5">
                <form action={postData}>
                    <Button type="submit"> submit</Button>
                </form>

            </div>
        </>
    )
}
