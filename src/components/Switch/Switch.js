import Switch from "react-switch";
import s from './Switch.module.css'

const SwitchExample  = ({checked, onChange}) => {
    return ( 
        <div className={s.toggle_box}>
            <div className="example">
                    <label htmlFor="material-switch">
                    <span className={s.text}>RU</span>
                    <Switch
                        checked={checked}
                        onChange={onChange}
                        offColor="#bc6977"
                        onColor="#bc6977"
                        offHandleColor="#f8bbcfd5"
                        onHandleColor="##f8bbcfd5"
                        handleDiameter={10}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 3px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
                        height={10}
                        width={24}
                        className="react-switch"
                        id="material-switch"
                    />
                    <span className={s.text}>PL</span>
                </label>
            </div>
        </div>
    );
  };
 
  export default SwitchExample;