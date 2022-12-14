import React from "react";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { SafeAreaView, Text, StyleSheet } from 'react-native';

const CELL_COUNT = 4;

export default function CodeInputs({ value, setValue }) {
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    })
    return <SafeAreaView style={styles.root}>
        <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, becaus e context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
                <Text
                    key={index}
                    style={[styles.cell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
            )}
        />
    </SafeAreaView>
}



const styles = StyleSheet.create({
    root: { marginBottom: 10, justifyContent: 'center', paddingHorizontal: 60, },
    cell: {
        width: 45,
        height: 60,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 8
    },
});


