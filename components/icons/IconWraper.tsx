import { FC } from 'react';
import { SvgContainer } from 'components';
import { SVGProps } from 'types';

const IconWrapper: FC<SVGProps> = props => {
    return (
        <SvgContainer {...props}>
            {props.children}
        </SvgContainer>
    )
};

export { IconWrapper };
