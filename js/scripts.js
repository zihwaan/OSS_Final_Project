/*!
* Start Bootstrap - Heroic Features v5.0.5 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let sang = "";

import { get } from "../node_modules/install/install";
import { parse } from "node-html-parser";

let url="https://skb.skku.edu/biotech/community/under_notice.do?mode=list&srCategoryId1=235&srSearchKey=&srSearchVal=";
get( url,
    {headers: {
        "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
    },
},
(res) =>{
    let data = "";
    res.on("data", (d) =>{ 
        data += d;
    });
    res.on("end", () =>{
        console.log("\n\n 여기는 생공대~ \n\n");
        let root = parse(data);
        //console.log(root);
        root.querySelectorAll(".board-list-content-title").forEach((menu) =>{
            if (menu.getElementsByTagName("a").text!=null&&menu.getElementsByTagName("a").text!="undefined"){
                console.log(menu.getElementsByTagName("a").text);
            }
            
            if(!menu.innerText.trim().includes("NEW")){
                console.log("출력 : " + menu.innerText.trim());
                sang+=menu.innerText.trim();
                sang+="\n";
            } 
        });
    });
});

//document.getElementById("sang").innerHTML=sang;


url="https://sme.skku.edu/iesys/notice.do?mode=list&srCategoryId1=1216&srSearchKey=&srSearchVal=";
get( url,
    {headers: {
        "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
    },
},
(res) =>{
    let data = "";
    res.on("data", (d) =>{ 
        data += d;
    });
    res.on("end", () =>{
        console.log("\n\n 여기부터 시경~ \n\n");console.log("sang : "+ sang);
        let root = parse(data);
        //console.log(root);
        root.querySelectorAll(".board-list-content-title").forEach((menu) =>{
            if (menu.getElementsByTagName("a").text!=null&&menu.getElementsByTagName("a").text!="undefined"){
                console.log(menu.getElementsByTagName("a").text);
            }
            
            if(!menu.innerText.trim().includes("NEW")){
                //console.log("출력 : ");
                //console.log(menu.innerText.trim());

                let input = menu.innerText.trim();
                let i = 0;
                while(1){
                    if(input[i] == ']'){
                        break;
                    } i++;
                }
                let real = input.trim().substring(i+1).trim();
                console.log("리얼 : " + real);
            } 
        });
    });
});

url="https://ice.skku.edu/ice/community/notice.do?mode=list&srCategoryId1=815&srSearchKey=&srSearchVal=";
get( url,
    {headers: {
        "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
    },
},
(res) =>{
    let data = "";
    res.on("data", (d) =>{ 
        data += d;
    });
    res.on("end", () =>{
        console.log("\n\n 여기부터 전전~ \n\n");
        let root = parse(data);
        //console.log(root);
        root.querySelectorAll(".board-list-content-title").forEach((menu) =>{
            if (menu.getElementsByTagName("a").text!=null&&menu.getElementsByTagName("a").text!="undefined"){
                console.log(menu.getElementsByTagName("a").text);
            }
            
            if(!menu.innerText.trim().includes("NEW")){
                //console.log("출력 : ");
                //console.log(menu.innerText.trim());

                let input = menu.innerText.trim();
                let i = 0;
                while(1){
                    if(input[i] == ']'){
                        break;
                    } i++;
                }
                let real = input.trim().substring(i+1).trim();
                console.log("리얼 : " + real);
            } 
        });
    });
});

url="https://globalbiz.skku.edu/gba/board/notice.do?mode=list&srCategoryId1=266&srSearchKey=&srSearchVal=";
get( url,
    {headers: {
        "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
    },
},
(res) =>{
    let data = "";
    res.on("data", (d) =>{ 
        data += d;
    });
    res.on("end", () =>{
        console.log("\n\n 여기부터 글로별경영~ \n\n");
        let root = parse(data);
        //console.log(root);
        root.querySelectorAll(".board-list-content-title").forEach((menu) =>{
            if (menu.getElementsByTagName("a").text!=null&&menu.getElementsByTagName("a").text!="undefined"){
                console.log(menu.getElementsByTagName("a").text);
            }
            
            if(!menu.innerText.trim().includes("NEW")){
                //console.log("출력 : ");
                //console.log(menu.innerText.trim());

                let input = menu.innerText.trim();
                let i = 0;
                while(1){
                    if(input[i] == ']'){
                        break;
                    } i++;
                }
                let real = input.trim().substring(i+1).trim();
                console.log("리얼 : " + real);
            } 
        });
    });
});
