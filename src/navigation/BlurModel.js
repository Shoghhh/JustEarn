import React from 'react';
import { BlurView } from '@react-native-community/blur';
import Styled from 'styled-components';

function BlurModal() {
    return (
        <BlurWrapper blurType="light" blurAmount={20}>
            <Text>Modal with blur background</Text>
        </BlurWrapper>
    );
}

const BlurWrapper = Styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;