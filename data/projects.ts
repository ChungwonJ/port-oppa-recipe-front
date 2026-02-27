import { ProjectData, ProjectId } from '@/types/project';

export const PROJECTS_DATA: Record<ProjectId, ProjectData> = {
  opparecipe: {
    id: "opparecipe",
    name: "오빠레시피 ㅣ 사진으로 시작하는 AI 기반 레시피 추출 서비스",
    architectureImage: "",
    projectSrc: [
      {
        title: "Live : ",
        src: [
          "https://www.oppa-recipe.shop",
        ]
      },
      {
        title: "깃허브 : ",
        src: [
          "https://github.com/ChungwonJ/oppa-recipe-front",
        ]
      }
    ],
    templateBlocks: [
      {
        title: "문제",
        content: [
          "레시피 저장시 레시피 데이터가 많아질때 시각적인 버벅임 현상우려"
        ]
      },
      {
        title: "해결",
        items: [
          "React.memo 도입: Recipe Card 컴포넌트에 React.memo를 적용하여 부모 컴포넌트의 상태가 변하더라도 Props가 변경되지 않은 자식 컴포넌트의 재렌더링을 차단함",
          "Profiler 측정: React DevTools의 Profiler 기능을 활용하여 최적화 전후의 실제 실행 시간을 수치화하여 검증"
        ]
      },
      {
        title: "결과",
        content: [
          "렌더링 소요 시간 약 13% 단축: 273.2ms → 236.6ms로 개선되어 대량의 레시피 리스트에서도 부드러운 스크롤과 인터랙션 제공",
        ]
      }
    ],
    caseArchitectureImage: '/es-architecture.png',
    architectureSrc: [
      {
        title: "깃허브(RecipeItem) : ",
        src: [
          "https://github.com/ChungwonJ/oppa-recipe-front/blob/main/__tests__/RecipeItem.test.tsx",
        ]
      },
      {
        title: "깃허브(TestPage) : ",
        src: [
          "https://github.com/ChungwonJ/oppa-recipe-front/blob/main/components/TestPage.tsx",
        ]
      }
    ],
    caseStudy: [
      {
        title: "문제 : 저장레시피 리스트 증가시 시각적인 버벅임 현상우려",
        content: [
          "레시피 저장이 증가할수록 렌더링에 소요되는 시간이 길어져 사용자 경험 저하 우려",
        ]
      },
      {
        title: "해결방안",
        items: [
          "React.memo 도입: Recipe Card 컴포넌트에 React.memo를 적용하여 부모 컴포넌트의 상태가 변하더라도 Props가 변경되지 않은 자식 컴포넌트의 재렌더링을 차단",
          "Profiler 측정: React DevTools의 Profiler 기능을 활용하여 최적화 전후의 실제 실행 시간을 수치화하여 검증",
        ]
      },
      {
        title: "성과",
        content: [
          "렌더링 소요 시간 약 13% 단축: 273.2ms → 236.6ms로 개선되어 대량의 레시피 리스트에서도 부드러운 스크롤과 인터랙션 제공",
        ],
        testImg: [
          '/memo-before.PNG',
          '/memo-after.PNG'
        ]
      },
      {
        title: "느낀점",
        items: [
          "데이터의 증가시 성능 저하 문제는 단순히 최적화 기술 도입뿐만 아니라, 데이터의 특성과 사용자 행동 패턴을 고려한 종합적인 접근이 필요하다는 것을 체감",
          "Profiler를 활용한 측정은 최적화의 효과를 객관적으로 검증하는 데 필수적이며, 이를 통해 최적화가 실제로 사용자 경험 개선에 기여하는지 확인할 수 있었다는 점에서 큰 의미가 있었다"
        ]
      }
    ]
  },
  // opparecipe: {
  //   id: "opparecipe",
  //   name: "Oppa Recipe Project",
  //   architectureImage: "",
  //   templateBlocks: [

  //   ],
  //   caseStudy: [

  //   ]
  // }
};