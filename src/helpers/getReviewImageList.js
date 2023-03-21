import review1 from "../assets/img/reviews/01.jpg";
import review2 from "../assets/img/reviews/02.jpg";
import review3 from "../assets/img/reviews/03.jpg";
import review4 from "../assets/img/reviews/04.jpg";
import review5 from "../assets/img/reviews/05.jpg";
import review6 from "../assets/img/reviews/06.jpg";
import review1Mob from "../assets/img/reviews/01_mob.jpg";
import review2Mob from "../assets/img/reviews/02_mob.jpg";
import review3Mob from "../assets/img/reviews/03_mob.jpg";
import review4Mob from "../assets/img/reviews/04_mob.jpg";
import review5Mob from "../assets/img/reviews/05_mob.jpg";
import review6Mob from "../assets/img/reviews/06_mob.jpg";

export const getReviewImageList = () => {
	return [
		{ src: review1, mobSrc: review1Mob },
		{ src: review2, mobSrc: review2Mob },
		{ src: review3, mobSrc: review3Mob },
		{ src: review4, mobSrc: review4Mob },
		{ src: review5, mobSrc: review5Mob },
		{ src: review6, mobSrc: review6Mob },
	];
};
