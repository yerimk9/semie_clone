export interface FoodGuideItem {
  id: number;
  name: string;
  desc: string;
  hashTag?: string[]; // 해시태그는 선택적일 수 있습니다.
  preparation_time?: number; // 준비 시간은 선택적일 수 있습니다.
  cooking_time?: number; // 조리 시간은 선택적일 수 있습니다.
  timestamp?: string; // 타임스탬프는 선택적입니다.
}

export interface FoodGuide {
  id: number;
  title: string;
  main_img: string;
  sub_title1?: string; // 서브 타이틀 1은 선택적입니다.
  sub_title2?: string; // 서브 타이틀 2는 선택적입니다.
  hashTag?: string[]; // 해시태그는 선택적입니다.
  items?: FoodGuideItem[];
}

export interface FoodGuideItemProps {
  item: FoodGuide;
}

export interface FoodGuideProps {
  list: FoodGuide[];
}

export interface GuideModalProps {
  list: FoodGuide[];
  isModal: boolean;
  setIsModal: () => void;
}

export interface WowListItemProps {
  item: {
    date: string;
    imgUrl: string;
    status: string;
    title: string;
  };
}

export interface FilterProps {
  list: string[];
}
