import React from 'react';
import './App.css';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const theme = {
  colors: {
    background: {
      primary: '#eff3f8',
    },
    text: {
      primary: '#212121',
      secondary: '#848484',
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{ backgroundColor: theme.colors.background.primary }}
      >
        <HomeScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
