/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const quranChapters = [
  'Al-Fatiha',
  'Al-Baqarah',
  'Aali Imran',
  'An-Nisa',
  "Al-Ma'idah",
  "Al-An'am",
  "Al-A'raf",
  'Al-Anfal',
  'At-Tawbah',
  'Yunus',
  'Hud',
  'Yusuf',
  "Ar-Ra'd",
  'Ibrahim',
  'Al-Hijr',
  'An-Nahl',
  'Al-Isra',
  'Al-Kahf',
  'Maryam',
  'Taha',
  'Al-Anbiya',
  'Al-Hajj',
  'Al-Mu’minun',
  'An-Nur',
  'Al-Furqan',
  "Ash-Shu'ara",
  'An-Naml',
  'Al-Qasas',
  'Al-Ankabut',
  'Ar-Rum',
  'Luqman',
  'As-Sajda',
  'Al-Ahzab',
  'Saba',
  'Fatir',
  'Yasin',
  'As-Saffat',
  'Sad',
  'Az-Zumar',
  'Ghafir',
  'Fussilat',
  'Ash-Shura',
  'Az-Zukhruf',
  'Ad-Dukhan',
  'Al-Jathiya',
  'Al-Ahqaf',
  'Muhammad',
  'Al-Fath',
  'Al-Hujurat',
  'Qaf',
  'Adh-Dhariyat',
  'At-Tur',
  'An-Najm',
  'Al-Qamar',
  'Ar-Rahman',
  "Al-Waqi'a",
  'Al-Hadid',
  'Al-Mujadila',
  'Al-Hashr',
  'Al-Mumtahina',
  'As-Saff',
  'Al-Jumua',
  'Al-Munafiqun',
  'At-Taghabun',
  'At-Talaq',
  'At-Tahrim',
  'Al-Mulk',
  'Al-Qalam',
  'Al-Haqqah',
  "Al-Ma'arij",
  'Nuh',
  'Al-Jinn',
  'Al-Muzzammil',
  'Al-Muddaththir',
  'Al-Qiyamah',
  'Al-Insan',
  'Al-Mursalat',
  'An-Naba',
  "An-Nazi'at",
  'Abasa',
  'At-Takwir',
  'Al-Infitar',
  'Al-Mutaffifin',
  'Al-Inshiqaq',
  'Al-Buruj',
  'At-Tariq',
  "Al-A'la",
  'Al-Ghashiya',
  'Al-Fajr',
  'Al-Balad',
  'Ash-Shams',
  'Al-Layl',
  'Ad-Duha',
  'Ash-Sharh',
  'At-Tin',
  'Al-Alaq',
  'Al-Qadr',
  'Al-Bayyina',
  'Az-Zalzalah',
  'Al-Adiyat',
  "Al-Qari'a",
  'At-Takathur',
  'Al-Asr',
  'Al-Humaza',
  'Al-Fil',
  'Quraysh',
  "Al-Ma'un",
  'Al-Kawthar',
  'Al-Kafirun',
  'An-Nasr',
  'Al-Masad',
  'Al-Ikhlas',
  'Al-Falaq',
  'An-Nas',
];
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle} className="flex">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View className="flex items-center justify-center h-[40px] mb-0.5">
        <Text className="text-2xl text-center">Holy Quran</Text>
      </View>

      <View className="bg-gray-50 mb-0.5" style={{height: '93%'}}>
        {/* <FlatList
          data={quranChapters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View className="bg-gray-200 p-6 my-0.5">
              <Text className="text-lg">{item}</Text>
            </View>
          )}
        /> */}
      </View>
    </SafeAreaView>
  );
}

export default App;
