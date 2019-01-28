import React, { Component } from 'react'; 
import { Text, TouchableOpacity, ViewPropTypes } from 'react-native'; 
import Base, { Default, Danger, Info, Success } from './style';
import PropTypes from 'prop-types';

import Emoji from 'react-native-emoji';


const { array, string, object, bool, func, any } = PropTypes;

class Boton extends Component {
    static propTypes = {
        // Paso 4: Definición de las propiedades del Botón y la callback function para onPress
        children: any,
        danger: bool,
        info: bool,
        style: ViewPropTypes.style,
        success: bool,
        onPress: func,
    };
    getTheme() {
        // Paso 5: La función que revisa las props y devuelve los estilos correspondientes
        const { danger, info, success } = this.props;

        if (info) {
            return Info;
        }

        if (success) {
            return Success;
        }

        if (danger) {
            return Danger;
        }

        return Default;
    }

    render() {
        // Paso 6: Con la función tomamos los estilos de las props y se aplican a
        // TouchableOpacity, además vamos a renderizar un label personalizado
        const theme = this.getTheme();
        const {
            children,
            onPress,
            style,
            rounded,
        } = this.props;

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    Base.main,
                    theme.main,
                    rounded ? Base.rounded : null,
                    style,
                ]}
                onPress={onPress}
            >
                <Text style={[Base.label, theme.label]}>
                    <Emoji name="heart_eyes" style={{fontSize: 20}} />
                    {children}
                    </Text>
            </TouchableOpacity>
        );
    }
};

export default Boton;

