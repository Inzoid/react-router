const month = 'JANUARY';
const week = 'WEEK_3';

const J = {
  JANUARY: {
    WEEK_1: [
      {
        day: 'Kamis',
        date: '7 Januari 2021',
        time: '19:00 WIB',
        link: 'https://www.tiket.com/to-do/konser-jkt48-fajar-sang-idola-7-januari',
        color: 'info',
        info: '1',
      },
      {
        day: 'Sabtu',
        date: '9 Januari 2021',
        time: '14:00 WIB',
        link: 'https://www.tiket.com/to-do/konser-jkt48-fajar-sang-idola-9-januari',
        color: 'primary',
        info: '1',
      }
    ],
    WEEK_3: [
      {
        day: 'Sabtu',
        date: '23 Januari 2021',
        time: '12:00 WIB',
        link: 'https://www.tiket.com/to-do/konser-jkt48-fajar-sang-idola-23-januari',
        color: 'primary',
        info: '1',
      }
    ]
  }
}

const K = {
  JANUARY: {
    WEEK_1: [
      {
        day: 'Rabu',
        date: '6 Januari 2021',
        time: '19:00 WIB',
        link: 'https://www.tiket.com/to-do/cara-meminum-ramune-jkt48-show-6-januari',
        color: 'info',
        info: '1',
      },
      {
        day: 'Minggu',
        date: '10 Januari 2021',
        time: '14:00 WIB',
        link: 'https://www.tiket.com/to-do/cara-meminum-ramune-jkt48-show-10-januari',
        color: 'primary',
        info: '1',
      }
    ],
    WEEK_3: [
      {
        day: 'Minggu',
        date: '24 Januari 2021',
        time: '12:00 WIB',
        link: 'https://www.tiket.com/to-do/cara-meminum-ramune-jkt48-show-24-januari',
        color: 'primary',
        info: '1',
      }
    ]
  }
}

const T = {
  JANUARY: {
    WEEK_1: [
      {
        day: 'Jumat',
        date: '8 Januari 2021',
        time: '19:00 WIB',
        link: 'https://www.tiket.com/to-do/konser-jkt48-fly-team-t-8-januari',
        color: 'danger',
        info: '1',
      },
      {
        day: 'Minggu',
        date: '10 Januari 2021',
        time: '19:00 WIB',
        link: 'https://www.tiket.com/to-do/konser-jkt48-fly-team-t-10-januari',
        color: 'primary',
        info: '2',
      }
    ],
    WEEK_3: [
      {
        day: 'Minggu',
        date: '24 Januari 2021',
        time: '16:00 WIB',
        link: 'https://www.tiket.com/to-do/konser-jkt48-fly-team-t-24-januari',
        color: 'primary',
        info: '1',
      }
    ]
  }
}

const A = {
  JANUARY: {
    WEEK_1: [
      {
        day: 'Minggu',
        date: '9 Januari 2021',
        time: '19:00 WIB',
        link: 'https://www.tiket.com/to-do/konser-jkt48-pajama-drive-9-januari',
        color: 'danger',
        info: '2'
      }
    ],
    WEEK_3: [
      {
        day: 'Sabtu',
        date: '23 Januari 2021',
        time: '16:00 WIB',
        link: 'https://www.tiket.com/to-do/konser-jkt48-pajama-drive-23-januari',
        color: 'danger',
        info: '1',
      }
    ]
  }
}

const SHOW_PACKAGES = {
  JANUARY: {
    WEEK_1: [
      {
        date: 'Week 1',
        link: 'https://www.tiket.com/to-do/konser-jkt48-theater-7-show-package-1st-week-januari-2021',
        color: 'info',
      }
    ],
    WEEK_3: [
      {
        date: 'Week 3',
        link: 'https://www.tiket.com/to-do/konser-jkt48-theater-7-show-package-1st-week-januari-2021',
        color: 'info',
      }
    ]
  }
}

const TEAM_J = J[month][week];
const TEAM_K = K[month][week];
const TEAM_T = T[month][week];
const ACADEMY = A[month][week];
const PACKAGES = SHOW_PACKAGES[month][week];

export default { 
  TEAM_J, 
  TEAM_K, 
  TEAM_T, 
  ACADEMY,
  PACKAGES
};
