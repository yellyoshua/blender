/* eslint-disable id-length */
import _ from 'underscore';
import dayjs from 'dayjs';

export default function useDateInfo () {
  const get_date_info = (date) => {
    const age = getAge(dayjs(date));
    const zodiac = getZodiacSign(dayjs(date));
    const isLegalAge = age >= 18;

    return {
      age,
      zodiac,
      isLegalAge
    };
  };

  return {get_date_info};
}

export function getZodiacSign (date) {
  const zodiacSigns = [
    {
      start: dayjs('12/22').format('MM/DD'),
      end: dayjs('01/20').format('MM/DD'),
      label: 'Capricorn',
      icon: 'zodiac-capricorn'
    },
    {
      start: dayjs('01/21').format('MM/DD'),
      end: dayjs('02/19').format('MM/DD'),
      label: 'Aquarius',
      icon: 'zodiac-aquarius'
    },
    {
      start: dayjs('02/20').format('MM/DD'),
      end: dayjs('03/20').format('MM/DD'),
      label: 'Pisces',
      icon: 'zodiac-pisces'
    },
    {
      start: dayjs('03/21').format('MM/DD'),
      end: dayjs('04/20').format('MM/DD'),
      label: 'Aries',
      icon: 'zodiac-aries'
    },
    {
      start: dayjs('04/21').format('MM/DD'),
      end: dayjs('05/21').format('MM/DD'),
      label: 'Taurus',
      icon: 'zodiac-taurus'
    },
    {
      start: dayjs('05/22').format('MM/DD'),
      end: dayjs('06/21').format('MM/DD'),
      label: 'Gemini',
      icon: 'zodiac-gemini'
    },
    {
      start: dayjs('06/22').format('MM/DD'),
      end: dayjs('07/22').format('MM/DD'),
      label: 'Cancer',
      icon: 'zodiac-cancer'
    },
    {
      start: dayjs('07/23').format('MM/DD'),
      end: dayjs('08/22').format('MM/DD'),
      label: 'Leo',
      icon: 'zodiac-leo'
    },
    {
      start: dayjs('08/23').format('MM/DD'),
      end: dayjs('09/22').format('MM/DD'),
      label: 'Virgo',
      icon: 'zodiac-virgo'
    },
    {
      start: dayjs('09/23').format('MM/DD'),
      end: dayjs('10/22').format('MM/DD'),
      label: 'Libra',
      icon: 'zodiac-libra'
    },
    {
      start: dayjs('10/23').format('MM/DD'),
      end: dayjs('11/22').format('MM/DD'),
      label: 'Scorpio',
      icon: 'zodiac-scorpio'
    },
    {
      start: dayjs('11/23').format('MM/DD'),
      end: dayjs('12/21').format('MM/DD'),
      label: 'Sagittarius',
      icon: 'zodiac-sagittarius'
    }
  ];
  const sign = _(zodiacSigns).find((sign) => {
    const {start, end} = sign;
    const start_date = dayjs(start);
    const end_date = dayjs(end);
    const date_date = dayjs(date.format('MM/DD'));

    const isBetweenTheseDays = date_date.isAfter(start_date) && date_date.isBefore(end_date);
    const isTheSameDay = date_date.isSame(start_date) || date_date.isSame(end_date);
  
    return isBetweenTheseDays || isTheSameDay;
  });

  return sign;
}

export function getAge (date) {
  return dayjs().diff(date, 'year');
}
