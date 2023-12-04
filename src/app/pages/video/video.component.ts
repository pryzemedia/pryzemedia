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

  gseSrc: SafeResourceUrl;
  dalSrc: SafeResourceUrl;
  cybThreatsSrc: SafeResourceUrl;
  greyhoundSrc: SafeResourceUrl;
  boostTrainSrc: SafeResourceUrl;
  mvisionSrc: SafeResourceUrl;
  rockdaleSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
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
    this.rockdaleSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/DfihweA9CKw?si=qkI0neQUM1dC_Ug_'
    );
  }/**/

  InitVideoData(): void {
    this.videoPortfolio = [
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
