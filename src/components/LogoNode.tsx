import { ConstVar } from "../constant";
import { useStyle } from "../hooks/style";

export const LogoNode = () => {
  const { styles } = useStyle();
  return (
    <div className={styles.logo}>
      <img
        src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*eco6RrQhxbMAAAAAAAAAAAAADgCCAQ/original"
        draggable={false}
        alt="logo"
      />
      <span>{ConstVar.name}</span>
    </div>
  );
};
