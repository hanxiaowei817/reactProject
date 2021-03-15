import React from 'react'
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import RewardCard01 from './RewardCard01';
import createOverrides from './theme2';
import Loves from './loves'
const baseTheme = createMuiTheme();
export default function Discuss() {
    return (
        <div>
            <ThemeProvider
                theme={{
                    ...baseTheme,
                    overrides: createOverrides(baseTheme)
                }}
            >
                <RewardCard01 />
            </ThemeProvider>
            <Loves></Loves>
        </div>
    )
}
