import { createBrowserRouter } from "react-router";
import Splash from "../../imports/启动页";
import Welcome from "../../imports/Welcome";
import Intro1WithNavigation from "../components/Intro1WithNavigation";
import Intro2WithNavigation from "../components/Intro2WithNavigation";
import Intro3WithNavigation from "../components/Intro3WithNavigation";
import Intro4WithNavigation from "../components/Intro4WithNavigation";
import GradeSelection from "../components/GradeSelection";
import GradeSelectionEmpty from "../components/GradeSelectionEmpty";
import GradeSelectionWithNavigation from "../components/GradeSelectionWithNavigation";
import ElementaryGradeSelection from "../components/ElementaryGradeSelection";
import UserTypeSelection from "../components/UserTypeSelection";
import DiscoverySourceSelection from "../components/DiscoverySourceSelection";
import CompletionSuccess from "../components/CompletionSuccess";
import TrialPaywall from "../components/TrialPaywall";
import TrialPaywallB from "../components/TrialPaywallB";
import ProductHomeV2 from "../components/ProductHomeV2";
import QuestionBookScreen from "../components/QuestionBookScreen";
import SettingsScreen from "../components/SettingsScreen";
import SettingsScreenUnsubscribed from "../components/SettingsScreenUnsubscribed";
import InviteFriendsScreen from "../components/InviteFriendsScreen";
import CameraScreen from "../components/CameraScreen";
import QuestionReportScreen from "../components/QuestionReportScreen";
import CameraReviewScreen from "../components/CameraReviewScreen";
import { OnboardingLayout } from "./OnboardingLayout";

/**
 * Onboarding routes for すうナビ (Su Navi) math tutoring app
 * 
 * Flow: Splash -> Welcome -> Intro1-4 -> Grade Selection -> Questionnaires
 * 
 * The root route uses OnboardingLayout which provides the device frame
 * and debug panel, with child routes rendering in the <Outlet />.
 */
export function createOnboardingRouter(showDebug = true, deviceWidth = 375) {
  return createBrowserRouter([
    {
      path: "/",
      element: <OnboardingLayout showDebug={showDebug} deviceWidth={deviceWidth} />,
      children: [
        {
          index: true,
          Component: Splash,
        },
        {
          path: "home-v2",
          Component: ProductHomeV2,
        },
        {
          path: "question-book",
          Component: QuestionBookScreen,
        },
        {
          path: "settings",
          Component: SettingsScreen,
        },
        {
          path: "settings-unsubscribed",
          Component: SettingsScreenUnsubscribed,
        },
        {
          path: "invite-friends",
          Component: InviteFriendsScreen,
        },
        {
          path: "camera",
          Component: CameraScreen,
        },
        {
          path: "question-report",
          Component: QuestionReportScreen,
        },
        {
          path: "camera-review",
          Component: CameraReviewScreen,
        },
        {
          path: "welcome",
          Component: Welcome,
        },
        {
          path: "intro",
          Component: Intro1WithNavigation,
        },
        {
          path: "intro2",
          Component: Intro2WithNavigation,
        },
        {
          path: "intro3",
          Component: Intro3WithNavigation,
        },
        {
          path: "intro4",
          Component: Intro4WithNavigation,
        },
        {
          path: "grade-empty",
          Component: GradeSelectionEmpty,
        },
        {
          path: "grade",
          Component: GradeSelectionWithNavigation,
        },
        {
          path: "elementary-grade",
          Component: ElementaryGradeSelection,
        },
        {
          path: "user-type",
          Component: UserTypeSelection,
        },
        {
          path: "discovery-source",
          Component: DiscoverySourceSelection,
        },
        {
          path: "success",
          Component: CompletionSuccess,
        },
        {
          path: "paywall",
          Component: TrialPaywall,
        },
        {
          path: "paywall-b",
          Component: TrialPaywallB,
        },
      ],
    },
    {
      path: "/figma",
      element: <OnboardingLayout showDebug={false} deviceWidth={deviceWidth} />,
      children: [
        {
          path: "user-type",
          Component: UserTypeSelection,
        },
      ],
    },
  ]);
}
