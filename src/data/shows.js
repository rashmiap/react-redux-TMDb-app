const shows = [
  {
  "page": 1,
  "total_results": 74724,
  "total_pages": 3737,
  "results": [
    {
      "original_name": "The Big Bang Theory",
      "genre_ids": [
        35
      ],
      "name": "The Big Bang Theory",
      "popularity": 319.823,
      "origin_country": [
        "US"
      ],
      "vote_count": 3101,
      "first_air_date": "2007-09-24",
      "backdrop_path": "/nGsNruW3W27V6r4gkyc3iiEGsKR.jpg",
      "original_language": "en",
      "id": 1418,
      "vote_average": 6.8,
      "overview": "The Big Bang Theory is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
      "poster_path": "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg"
    },
    {
      "original_name": "The 100",
      "genre_ids": [
        18,
        10765
      ],
      "name": "The 100",
      "popularity": 140.843,
      "origin_country": [
        "US"
      ],
      "vote_count": 1247,
      "first_air_date": "2014-03-19",
      "backdrop_path": "/qYTIuJJ7fIehicAt3bl0vW70Sq6.jpg",
      "original_language": "en",
      "id": 48866,
      "vote_average": 6.4,
      "overview": "Based on the books by Kass Morgan, this show takes place 100 years in the future, when the Earth has been abandoned due to radioactivity. The last surviving humans live on an ark orbiting the planet — but the ark won't last forever. So the repressive regime picks 100 expendable juvenile delinquents to send down to Earth to see if the planet is still habitable.",
      "poster_path": "/wHIMMLFsk32wIzDmawWkYVbxFCS.jpg"
    },
    {
      "original_name": "Mindhunter",
      "genre_ids": [
        80,
        18
      ],
      "name": "Mindhunter",
      "popularity": 101.123,
      "origin_country": [
        "US"
      ],
      "vote_count": 419,
      "first_air_date": "2017-10-13",
      "backdrop_path": "/a906PH7CDmSOdS7kmnAgdWk5mhv.jpg",
      "original_language": "en",
      "id": 67744,
      "vote_average": 7.4,
      "overview": "An agent in the FBI's Elite Serial Crime Unit develops profiling techniques as he pursues notorious serial killers and rapists.",
      "poster_path": "/r7RIwuceOaDP4KTmU1EFeDniRq4.jpg"
    },
    {
      "original_name": "The Walking Dead",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "The Walking Dead",
      "popularity": 96.934,
      "origin_country": [
        "US"
      ],
      "vote_count": 3537,
      "first_air_date": "2010-10-31",
      "backdrop_path": "/xVzvD5BPAU4HpleFSo8QOdHkndo.jpg",
      "original_language": "en",
      "id": 1402,
      "vote_average": 7.3,
      "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
      "poster_path": "/yn7psGTZsHumHOkLUmYpyrIcA2G.jpg"
    },
    {
      "original_name": "The Simpsons",
      "genre_ids": [
        16,
        35
      ],
      "name": "The Simpsons",
      "popularity": 83.988,
      "origin_country": [
        "US"
      ],
      "vote_count": 1608,
      "first_air_date": "1989-12-17",
      "backdrop_path": "/lnnrirKFGwFW18GiH3AmuYy40cz.jpg",
      "original_language": "en",
      "id": 456,
      "vote_average": 7.1,
      "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
      "poster_path": "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
    },
    {
      "original_name": "Supernatural",
      "genre_ids": [
        18,
        9648,
        10765
      ],
      "name": "Supernatural",
      "popularity": 74.448,
      "origin_country": [
        "US"
      ],
      "vote_count": 1503,
      "first_air_date": "2005-09-13",
      "backdrop_path": "/koMUCyGWNtH5LXYbGqjsUwvgtsT.jpg",
      "original_language": "en",
      "id": 1622,
      "vote_average": 7.2,
      "overview": "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
      "poster_path": "/pui1V389cQft0BVFu9pbsYLEW1Q.jpg"
    },
    {
      "original_name": "Law & Order: Special Victims Unit",
      "genre_ids": [
        80,
        18
      ],
      "name": "Law & Order: Special Victims Unit",
      "popularity": 73.794,
      "origin_country": [
        "US"
      ],
      "vote_count": 492,
      "first_air_date": "1999-09-20",
      "backdrop_path": "/kOvt2BOOwSAQCT8yo3pM3X2GXjh.jpg",
      "original_language": "en",
      "id": 2734,
      "vote_average": 6.2,
      "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
      "poster_path": "/yzMQBlirydvKp4Zgr5FbXlsrRmw.jpg"
    },
    {
      "original_name": "Game of Thrones",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "Game of Thrones",
      "popularity": 69.386,
      "origin_country": [
        "US"
      ],
      "vote_count": 4715,
      "first_air_date": "2011-04-17",
      "backdrop_path": "/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
      "original_language": "en",
      "id": 1399,
      "vote_average": 8.2,
      "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      "poster_path": "/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg"
    },
    {
      "original_name": "The Missing",
      "genre_ids": [
        18,
        9648
      ],
      "name": "The Missing",
      "popularity": 68.152,
      "origin_country": [
        "GB"
      ],
      "vote_count": 120,
      "first_air_date": "2014-10-28",
      "backdrop_path": "/2hF2RnjVwHvxfhH2lkB9H9FdQHb.jpg",
      "original_language": "en",
      "id": 61555,
      "vote_average": 6.8,
      "overview": "A gripping anthological relationship thriller series exploring the emotional fallout of a child's abduction not only on the family but on the wider community, told over two time frames.",
      "poster_path": "/w1FDeOGoFS1qsSRHlj2Jzp2P0e1.jpg"
    },
    {
      "original_name": "The Originals",
      "genre_ids": [
        18,
        9648,
        10765
      ],
      "name": "The Originals",
      "popularity": 65.542,
      "origin_country": [
        "US"
      ],
      "vote_count": 318,
      "first_air_date": "2013-10-03",
      "backdrop_path": "/7crHhmTybBvGQ3Y96j4kdQ89ldY.jpg",
      "original_language": "en",
      "id": 46896,
      "vote_average": 7.3,
      "overview": "A spin-off from The Vampire Diaries and set in New Orleans, The Originals centers on the Mikaelson siblings, otherwise known as the world's original vampires: Klaus, Elijah, and Rebekah. Now Klaus must take down his protégé, Marcel, who is now in charge of New Orleans, in order to re-take his city, as he originally built New Orleans. Klaus departed from the city after being chased down by his father Mikael, while it was being constructed and Marcel took charge. As Klaus has returned after many years, his ego has provoked him to become the king of the city. \"Every King needs an heir\" says Klaus, accepting the unborn child. The child is a first to be born to a hybrid and a werewolf.",
      "poster_path": "/2llbXc2BOkLkBGgcNJCRbrWedUO.jpg"
    },
    {
      "original_name": "Friends",
      "genre_ids": [
        35
      ],
      "name": "Friends",
      "popularity": 61.24,
      "origin_country": [
        "US"
      ],
      "vote_count": 1225,
      "first_air_date": "1994-09-22",
      "backdrop_path": "/efiX8iir6GEBWCD0uCFIi5NAyYA.jpg",
      "original_language": "en",
      "id": 1668,
      "vote_average": 7.8,
      "overview": "The misadventures of a group of friends as they navigate the pitfalls of work, life and love in Manhattan.",
      "poster_path": "/7buCWBTpiPrCF5Lt023dSC60rgS.jpg"
    },
    {
      "original_name": "Doctor Who",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "Doctor Who",
      "popularity": 60.001,
      "origin_country": [
        "GB"
      ],
      "vote_count": 1186,
      "first_air_date": "2005-03-26",
      "backdrop_path": "/tQkigP2fItdzJWvtIhBvHxgs5yE.jpg",
      "original_language": "en",
      "id": 57243,
      "vote_average": 7,
      "overview": "The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street. But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it. He's saved us from alien menaces and evil from before time began – but just who is he?",
      "poster_path": "/3EcYZhBMAvVw4czcDLg9Sd0FuzQ.jpg"
    },
    {
      "original_name": "Family Guy",
      "id": 1434,
      "name": "Family Guy",
      "popularity": 59.502,
      "vote_count": 1200,
      "vote_average": 6.5,
      "first_air_date": "1999-01-31",
      "poster_path": "/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg",
      "genre_ids": [
        16,
        35
      ],
      "original_language": "en",
      "backdrop_path": "/pH38r4TWTqq7Mcs6XAlwgzNUeJe.jpg",
      "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
      "origin_country": [
        "US"
      ]
    },
    {
      "original_name": "Grey's Anatomy",
      "id": 1416,
      "name": "Grey's Anatomy",
      "popularity": 58.921,
      "vote_count": 741,
      "vote_average": 6.2,
      "first_air_date": "2005-03-27",
      "poster_path": "/mgOZSS2FFIGtfVeac1buBw3Cx5w.jpg",
      "genre_ids": [
        18
      ],
      "original_language": "en",
      "backdrop_path": "/y6JABtgWMVYPx84Rvy7tROU5aNH.jpg",
      "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
      "origin_country": [
        "US"
      ]
    },
    {
      "original_name": "The Daily Show with Trevor Noah",
      "genre_ids": [
        35,
        10763
      ],
      "name": "The Daily Show with Trevor Noah",
      "popularity": 58.471,
      "origin_country": [
        "US"
      ],
      "vote_count": 189,
      "first_air_date": "1996-07-22",
      "backdrop_path": "/uyilhJ7MBLjiaQXboaEwe44Z0jA.jpg",
      "original_language": "en",
      "id": 2224,
      "vote_average": 6.7,
      "overview": "Trevor Noah and The World's Fakest News Team tackle the biggest stories in news, politics and pop culture.",
      "poster_path": "/tZlqGXWGzEJNRl9QCCUN8ioSv2D.jpg"
    },
    {
      "original_name": "The Flash",
      "genre_ids": [
        18,
        10765
      ],
      "name": "The Flash",
      "popularity": 58.103,
      "origin_country": [
        "US"
      ],
      "vote_count": 2190,
      "first_air_date": "2014-10-07",
      "backdrop_path": "/mmxxEpTqVdwBlu5Pii7tbedBkPC.jpg",
      "original_language": "en",
      "id": 60735,
      "vote_average": 6.7,
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "poster_path": "/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg"
    },
    {
      "original_name": "Salvation",
      "genre_ids": [
        18,
        10765
      ],
      "name": "Salvation",
      "popularity": 57.68,
      "origin_country": [
        "US"
      ],
      "vote_count": 114,
      "first_air_date": "2017-07-12",
      "backdrop_path": "/iWatl2zNjHbG1mDpzJIKCsNxDgr.jpg",
      "original_language": "en",
      "id": 70513,
      "vote_average": 6.5,
      "overview": "An MIT grad student and a tech superstar bring a low-level Pentagon official a staggering discovery that an asteroid is just six months away from colliding with Earth.",
      "poster_path": "/hXCd9FUT7ZjoB390cGioVhEiXOB.jpg"
    },
    {
      "original_name": "Arrow",
      "genre_ids": [
        28,
        80,
        18,
        9648
      ],
      "name": "Arrow",
      "popularity": 57.643,
      "origin_country": [
        "US"
      ],
      "vote_count": 1912,
      "first_air_date": "2012-10-10",
      "backdrop_path": "/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg",
      "original_language": "en",
      "id": 1412,
      "vote_average": 6,
      "overview": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
      "poster_path": "/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg"
    },
    {
      "original_name": "Marvel's Agents of S.H.I.E.L.D.",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "Marvel's Agents of S.H.I.E.L.D.",
      "popularity": 56.489,
      "origin_country": [
        "US"
      ],
      "vote_count": 1119,
      "first_air_date": "2013-09-24",
      "backdrop_path": "/qtr5i6hOm6oVzTYl3jOQAYP3oc7.jpg",
      "original_language": "en",
      "id": 1403,
      "vote_average": 6.7,
      "overview": "Agent Phil Coulson of S.H.I.E.L.D. (Strategic Homeland Intervention, Enforcement and Logistics Division) puts together a team of agents to investigate the new, the strange and the unknown around the globe, protecting the ordinary from the extraordinary.",
      "poster_path": "/xjm6uVktPuKXNILwjLXwVG5d5BU.jpg"
    }
  ]
}
];
export default shows;
