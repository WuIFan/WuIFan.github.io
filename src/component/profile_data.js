export const profile_data = {
    "main": {
      "name": "Wu I Fan (Ivans)",
      "description": "Master of Information Engineering, National Cheng Kung University",
      "hello": "Welcome To My Place!",
      "image": "./image/ivans.jpg",
      "email": "denny91002@gmail.com",
      "address": {
        "country": "TW",
        "city": "Kaohsiung"
      },
      "skills": [
        { 
          "name": "Frontend",
          "content": ["Javascript","Typescript","Reactjs"]
        },
        {
          "name": "Backend",
          "content": ["Python","Jquery","Java","MySQL","Firebase"]
        },
        {
          "name": "Testing",
          "content":  ["Selenium IDE","SideeX"]
        },
        {
          "name": "Others",
          "content":  ["git","trello","hackmd"]
        }
      ],
      "schools": [
        {
          "degree": "Bachelor Degree",
          "title": "National Chung Hsing University, Computer Science and Engineering",
          "years": "2014 - 2018"
        },
        {
          "degree": "Master Degree",
          "title": "National Cheng Kung University, Computer Science and Information Engineering",
          "years": "2018 - 2020"
        }
      ],
      "projects": [
        {
          "name": "SideeX",
          "tool": "Typescript",
          "picture": "assets/img/portfolio/02-thumbnail.jpg",
          "description": "Selenium IDE 是目前全球最熱門的開源網頁錄製與播放自動化測試軟體，每日有超過 10萬名業界測試人員在 使用，目前 SeleniumHQ 官方正以台灣成功大學李信杰教授研究團隊所研發的 SideeX 2測試軟體為開發基礎，打造新一代 Selenium IDE，而我目前為SideeX 3代的主要Committer之一。\n我在團隊中主要負責錄製及回放等相關核心部分的撰寫，主要是找出尚未解決的問題，並試著解決，來讓我們的能夠錄製出更多的測試案例，以及能夠正確回放；還有透過與團隊的共同開發，學習如何在專案中協作、溝通，並在會議裡從團隊成員中的報告，學習各種新知。",
          "website": "https://sideex.io/"
        },
        {
          "name": "Spotify_MergePlayList",
          "tool": "Python",
          "picture": "assets/img/portfolio/03-thumbnail.jpg",
          "description": "因為我平常聽 Spotify 是照著新增時間聽，然後我個兩個歌單A,B，重複率有點高所以想合併，然而 Spotify 在合併歌單上並沒有太多的功能，查到的方法只有 Ctrl + a,Ctrl + c,Ctrl + v，雖然好像會照著當下的排序複製到新的歌單，但複製第二個歌單過去的時候，不重複的歌的新增時間就變成最新。而我有查到一篇使用者詢問官方類似的問題，但官方回覆是目前沒有打算新增這項 feature ，所以就透過官方提供的 api 自己寫看看，不同於學校作業，這是一支對我來講真的有用且有很多成就感的程式。",
          "website": "https://github.com/WuIFan/Spotify_MergePlayList"
        },
        {
          "name": "Discord_Bot",
          "tool": "Python",
          "picture": "assets/img/portfolio/01-thumbnail.jpg",
          "description": "因為和朋友平常最常使用的軟體就是 discord ，而自己又想練習寫 bot ，再加上這群朋友也都是資工系的學生，所以就想到一個可以爬 leetcode 個人資訊的網頁的 bot ，來抓出各種資訊，讓我們來互相比較砥礪成長。",
          "website": "https://github.com/WuIFan/Ivans_Bot"
        }
      ]
    }
}
export default profile_data