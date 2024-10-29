import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {showcaseItem} from "../../components/data/general-interface";
import {MultiCardsComponent} from "../../components/reusable/multi-cards/multi-cards.component";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, MultiCardsComponent],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{

  videoPortfolio: showcaseItem[] = [];

  cyberDark: SafeResourceUrl;
  cyberObj: SafeResourceUrl;
  gseSrc: SafeResourceUrl;
  dalSrc: SafeResourceUrl;
  sfKey: SafeResourceUrl;
  cybThreatsSrc: SafeResourceUrl;
  marvelSfc: SafeResourceUrl;
  swSfc: SafeResourceUrl;
  exceptional: SafeResourceUrl;
  greyhoundSrc: SafeResourceUrl;
  boostTrainSrc: SafeResourceUrl;
  mvisionSrc: SafeResourceUrl;
  rockdaleSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.cyberDark = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/73yESaOso-Q?si=DssY_n3Ahk5PZREE'
    );
    this.cyberObj = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/B6z5HQUAY8o?si=ZgI_ufVeDsULf67P'
    )
    this.gseSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/tqhHxWlJxlg?si=66Q0hPGbBUM147YP'
    );
    this.dalSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/BTZa0MmO1U8?si=H9UgS8IqIdO0-PGZ'
    );
    this.cybThreatsSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/RYop7lfj_z0?si=gIfzqxy-54IA56ll'
    );
    this.greyhoundSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/xVfzOv8cZmk?si=EFQXjC6-X-NHHU7Q'
    );
    this.boostTrainSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/KfiB74Yjy0I?si=ebOHlCIGjHjTVvx2'
    );
    this.mvisionSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/gWQ6jpRCneM?si=5pyZ7aJXbJcBw7Mu'
    );
    this.marvelSfc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/Kwz-00LBmG4?si=1f4EXeoKvH9BzFwA'
    );
    this.swSfc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/PKXL50FsJg0?si=ofZB56_uJLsLeQy7'
    );
    this.sfKey = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/CWIThZpjnL4?si=VhygJp24WSZvMVWu'
    );
    this.exceptional = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/P_KwtdRM20M?si=oqk60Mo_-6a7g-UX'
    );
    this.rockdaleSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/DfihweA9CKw?si=qkI0neQUM1dC_Ug_'
    );
  }/**/

  InitVideoData(): void {
    this.videoPortfolio = [
      {
        imgSrc: "assets/img/video/cyber_objectives.png",
        imgAlt: "Screenshot of the Cybereason's Objective Handling video",
        heading: "Cybereason - Objection Handling",
        desc: "This video was created to guide sales professionals through effective objection handling techniques. " +
          "Developed with a focus on strategically addressing objections at various stages of a conversation, this " +
          "video aims to equip sales teams with tools to navigate and respond confidently to client concerns.",
        desc2: "Software Utilized: Adobe After Effects and Adobe Illustrator",
        isVideo: true,
        youtube: this.cyberObj,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/cyber_darkside.png",
        imgAlt: "Screenshot of the Cybereason's Darkside video",
        heading: "Cybereason - The Defender Files - Darkside",
        desc: "Produced an engaging video highlighting Cybereason's Defender Files and the notorious Darkside Gang. " +
          "The video delves into the group's tactics and strategies, detailing the threat they pose and how " +
          "Cybereason's cutting-edge solutions effectively combat these risks.",
        desc2: "Software Utilized: Adobe After Effects and Adobe Illustrator",
        isVideo: true,
        youtube: this.cyberDark,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/GSE.png",
        imgAlt: "Screenshot of the GSE Promotional video",
        heading: "GSE Promotional Video",
        desc: "GSE Promotional Video Project Developed a captivating Global Sales Enablement " +
          "promotional video for Cybereason. Leveraged cutting-edge technology, including Faceswap, " +
          "Adobe After Effects, and Adobe Premiere Pro, to seamlessly replace actors' faces with authentic " +
          "Global Sales Enablement team members.",
        desc2: "Software Utilized: Adobe After Effects, Adobe Premiere Pro, Adobe Photoshop, and Faceswap",
        isVideo: true,
        youtube: this.gseSrc,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/title-screen-demos.jpg",
        imgAlt: "Screenshot of the Broadcast Graphics Title Screen video",
        heading: "Broadcast Graphics Title Screen Demos",
        desc: "Elevated the visual appeal of McAfee and Greyhound training videos with meticulously crafted and " +
          "animated broadcast graphics by Jeffrey K. Price. ",
        desc2: "Adobe After Effects, Adobe Illustrator, and Adobe Premiere Pro",
        isVideo: true,
        youtube: this.greyhoundSrc,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/2h16.png",
        imgAlt: "Screenshot of the Intel Security (McAfee) - eXceptional 2H16 video",
        heading: "Intel Security (McAfee) - eXceptional 2H16",
        desc: "This video, recorded with a green screen, features Scott Lovett, Corporate Vice President of " +
          "Global Sales, as he discusses the goals for Intel Security (now McAfee) at the start of 2016. I " +
          "managed all aspects of production, including setting up the green screen, lighting, and audio, " +
          "and handled post-production with video effects and animated text to emphasize key messages. The " +
          "result is a compelling, visually engaging presentation that effectively conveys the company's " +
          "strategic direction and objectives for the year.",
        desc2: "Software Utilized: Adobe After Effects, Adobe Photoshop, and Premiere Pro",
        isVideo: true,
        youtube: this.exceptional,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/sf_key_benefits.png",
        imgAlt: "Screenshot of the Intel Security (McAfee) - SalesForce Key Benefits video",
        heading: "Intel Security (McAfee) - SalesForce Key Benefits",
        desc: "In this video, shot on-location with a green screen setup, I handled all lighting, production, " +
          "and post-editing to highlight the benefits and features of the SalesForce tool for Intel Security's " +
          "sales team. The video explains how SalesForce enables seamless tracking from lead generation to " +
          "final sale, empowering the team to streamline operations and focus on building client relationships. " +
          "Through professional editing and tailored content, this video offers a clear view of how SalesForce " +
          "supports and optimizes the sales process at Intel Security (now McAfee).",
        desc2: "Software Utilized: Adobe After Effects, Adobe Photoshop, and Premiere Pro",
        isVideo: true,
        youtube: this.sfKey,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/sw_sfc.png",
        imgAlt: "Screenshot of the McAfee - SalesForce Promotion video",
        heading: "McAfee - SalesForce Promotion (Star Wars-Style Parody Trailer)",
        desc: "This engaging promotional video introduces McAfee’s sales team to the benefits of using Salesforce " +
          "for streamlined, end-to-end sales tracking. Created with an energetic, Star Wars-inspired trailer " +
          "style, the video combines iconic scenes from Star Wars movies with screenshots of the Salesforce tool, " +
          "humorously highlighting key features and advantages for managing the sales process. The parody " +
          "approach adds a memorable twist, showcasing the software's strengths in a fun, relatable format.",
        desc2: "Software Utilized: Adobe After Effects, Adobe Photoshop, and Premiere Pro",
        isVideo: true,
        youtube: this.swSfc,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/marvel_sfc.png",
        imgAlt: "Screenshot of the Threat Defense Lifecycle Class Promotion video",
        heading: "Threat Defense Lifecycle Class Promotion (Marvel-Style Parody Trailer)",
        desc: "This lively video presents the Threat Defense Lifecycle class, designed to empower McAfee's sales " +
          "team with the latest insights into cybersecurity threats and McAfee's advanced solutions. Using a " +
          "Marvel-inspired trailer style, the video creatively integrates scenes from the Marvel Cinematic " +
          "Universe (MCU) films with footage from the class's SharePoint site, highlighting how the training " +
          "equips salespeople to confidently address customer concerns. The mix of sci-fi adventure and " +
          "informative content brings a memorable, engaging touch to this essential resource for the team.",
        desc2: "Software Utilized: Adobe After Effects, Adobe Photoshop, and Premiere Pro",
        isVideo: true,
        youtube: this.marvelSfc,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/family-of-trainings.jpg",
        imgAlt: "Screenshot of the Boost Family of Training Promotional video",
        heading: "Boost Family of Training Promotional Video",
        desc: "Elevated the promotional efforts for McAfee's Boost Family of Training programs through a captivating " +
          "video created by Jeffrey K. Price.",
        desc2: "Software Utilized: Adobe After Effects, Adobe Illustrator, and Premiere Pro",
        isVideo: true,
        youtube: this.boostTrainSrc,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/dallas-parody.jpg",
        imgAlt: "Screenshot of the Global Sales L&D Summit video",
        heading: "Global Sales L&D Summit (DALLAS Parody) Project",
        desc: "Conceptualized and crafted a parody video reminiscent of the '80s DALLAS TV show for the " +
          "Global Sales Learning and Development Summit. The video features the show's theme song, and " +
          "exclusive footage of the Intel Security building and Executive Briefing Center, " +
          "meticulously edited by Jeffrey K. Price.",
        desc2: "Software Utilized: Adobe Premiere Pro",
        isVideo: true,
        youtube: this.dalSrc,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/cybereason-threats.jpg",
        imgAlt: "Screenshot of the Cybereason video",
        heading: "Cybereason - Protection from Cyber Threats",
        desc: "Crafted a compelling video showcasing how Cybereason's tools provide robust protection " +
          "against diverse cyber threats through multiple layers of defense, surpassing competitors.",
        desc2: "Software Utilized: Adobe After Effects and Adobe Illustrator",
        isVideo: true,
        youtube: this.cybThreatsSrc,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/mvision-police-story.jpg",
        imgAlt: "Screenshot of the MVISION Family of Products video",
        heading: "MVISION Family of Products Video",
        desc: "Illustrated the functionality of McAfee's MVISION products through a clever Police Force Analogy " +
          "in a video created by Jeffrey K. Price. ",
        desc2: "Software Utilized: Adobe Illustrator, Adobe Premiere Pro, and Sparkol's VideoScribe",
        isVideo: true,
        youtube: this.mvisionSrc,
        linkText: "Open Video"
      },
      {
        imgSrc: "assets/img/video/rockdale-schools.jpg",
        imgAlt: "Screenshot of the Rockdale County Public Schools Commercial video",
        heading: "Rockdale County Public Schools Commercial",
        desc: "Conceptualized and produced a compelling commercial for Rockdale County Public Schools, " +
          "skillfully crafted by Jeffrey K. Price. This project showcases a seamless blend of " +
          "creativity and technical expertise in visual storytelling, contributing to the promotional success " +
          "of the educational institution.",
        desc2: "Software Utilized: Adobe Premiere Pro",
        isVideo: true,
        youtube: this.rockdaleSrc,
        linkText: "Open Video"
      }
    ]
  }

  ngOnInit() :void{
    this.InitVideoData();
  }
}
