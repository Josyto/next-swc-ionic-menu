import { IonMenu } from "@ionic/react";

const MenuMobile = () => {
  return (
    <IonMenu
      side="end"
      menuId="menu-mobile"
      contentId="wrapper-menu-mobile"
      maxEdgeStart={80}
      type="overlay"
    >
      <h1>Menu mobile</h1>
      <p>Drag doesn&#39;t work if swc minify is true</p>
    </IonMenu>
  );
};

export default MenuMobile;
