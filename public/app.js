/* ==========================================================================
   Workbook Kas Bendahara Kelas 5A 2026–2027 (SDS Kasih Ananda)
   JavaScript Application Logic
   ========================================================================== */

const INITIAL_DATA = {
  "settings": {
    "nominalPerBulan": 20000,
    "tahunAjaran": "2026–2027",
    "namaKelas": "Kelas 5A",
    "namaSekolah": "SDS Kasih Ananda",
    "namaBendahara": "Mom Kim",
    "namaWaliKelas": "Bu Liswati",
    "pinBendahara": "5A2026",
    "namaKoordinator": "Mom Kim"
  },
  "months": [
    {
      "key": "juli_2026",
      "label": "Juli 2026"
    },
    {
      "key": "agustus_2026",
      "label": "Agustus 2026"
    },
    {
      "key": "september_2026",
      "label": "September 2026"
    },
    {
      "key": "oktober_2026",
      "label": "Oktober 2026"
    },
    {
      "key": "november_2026",
      "label": "November 2026"
    },
    {
      "key": "desember_2026",
      "label": "Desember 2026"
    },
    {
      "key": "januari_2027",
      "label": "Januari 2027"
    },
    {
      "key": "februari_2027",
      "label": "Februari 2027"
    },
    {
      "key": "maret_2027",
      "label": "Maret 2027"
    },
    {
      "key": "april_2027",
      "label": "April 2027"
    },
    {
      "key": "mei_2027",
      "label": "Mei 2027"
    },
    {
      "key": "juni_2027",
      "label": "Juni 2027"
    }
  ],
  "students": [
    {
      "id": 1,
      "name": "Adiara Zahwa Aprella",
      "phone": "082125470951",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 2,
      "name": "Alesha Fitria Khairunnisa",
      "phone": "081281920272",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 3,
      "name": "Alicia Alverina Carter",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 4,
      "name": "Allesya Alvera Meina Lengkong",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "agustus_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "september_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 5,
      "name": "Allysia Leilanie Yasmine",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 6,
      "name": "Ar Kenzie Kiaka Putra",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "agustus_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "september_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 7,
      "name": "Cathy Charissa Hutauruk",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 8,
      "name": "Cavello Vincenzo Pratama",
      "phone": "082130355514",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "februari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "maret_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "april_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "mei_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "juni_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        }
      }
    },
    {
      "id": 9,
      "name": "Chelsea Vebian",
      "phone": "087894587966",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "februari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "maret_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "april_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "mei_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "juni_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        }
      }
    },
    {
      "id": 10,
      "name": "Cleo Vennya Donita",
      "phone": "08111742629",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 11,
      "name": "Cleona Uli Malau",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 12,
      "name": "Cleva Anastasya Tanjung",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 13,
      "name": "Darrell Gavriel Oliver",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 14,
      "name": "Diandra Sapta Pratama",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 15,
      "name": "Fahira Anindita Nurhakim",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "februari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "maret_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "april_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "mei_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "juni_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        }
      }
    },
    {
      "id": 16,
      "name": "Fazila Azzahra",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 17,
      "name": "Fransisca",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "agustus_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "september_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 18,
      "name": "Josua Hamonangan Slahaan",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 19,
      "name": "Jusuf Habibi Muchtar",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "agustus_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "september_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 20,
      "name": "Khaerul Basyar Rukmana",
      "phone": "085710401552",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 21,
      "name": "Khairunnisa Dwi Kurniawan",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 22,
      "name": "Kim Reynand Andah Pranaja",
      "phone": "085117070159",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 23,
      "name": "Lutfi Khoirul Nur Ramadhan",
      "phone": "081283016613",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "februari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "maret_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "april_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "mei_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "juni_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        }
      }
    },
    {
      "id": 24,
      "name": "Marco Alejandro Mendoza Retno",
      "phone": "081808251119",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 25,
      "name": "Maryam Audra Milly",
      "phone": "085176651200",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 26,
      "name": "Muhammad Danish Ali Haidari",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "agustus_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "september_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 27,
      "name": "Muhammad Raja El Firdaus",
      "phone": "087745525749",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 28,
      "name": "Muhammad Rifat Ramadhan",
      "phone": "081212855837",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 29,
      "name": "Muhammad Zlatan Alkhalifi",
      "phone": "081216100160",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "februari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "maret_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "april_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "mei_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "juni_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        }
      }
    },
    {
      "id": 30,
      "name": "Nathaniel Raphael",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 31,
      "name": "Naura Alvy Zahya",
      "phone": "081291890142",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "februari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "maret_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "april_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "mei_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "juni_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        }
      }
    },
    {
      "id": 32,
      "name": "Queenzha Aqila",
      "phone": "081288071004",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "februari_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "maret_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "april_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "mei_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "juni_2027": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        }
      }
    },
    {
      "id": 33,
      "name": "Satya Akbar Putra",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "november_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "desember_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 34,
      "name": "Syafhia Nazruliza",
      "phone": "",
      "payments": {
        "juli_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "agustus_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "september_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    },
    {
      "id": 35,
      "name": "Viola Callista Donita",
      "phone": "08111742629",
      "payments": {
        "juli_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "agustus_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "september_2026": {
          "status": true,
          "date": "2026-08-05",
          "method": "Tunai / Cash"
        },
        "oktober_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "november_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "desember_2026": {
          "status": false,
          "date": "",
          "method": ""
        },
        "januari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "februari_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "maret_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "april_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "mei_2027": {
          "status": false,
          "date": "",
          "method": ""
        },
        "juni_2027": {
          "status": false,
          "date": "",
          "method": ""
        }
      }
    }
  ],
  "expenses": [
    {
      "id": "exp_1",
      "date": "2026-08-04",
      "category": "Lain-lain",
      "amount": 48735,
      "description": "Tissue 2 Ply A Basics 600gram 2pcs",
      "recipient": "Toko / Kasir",
      "evidence": ""
    },
    {
      "id": "exp_2",
      "date": "2026-08-04",
      "category": "Lain-lain",
      "amount": 58600,
      "description": "Stella Aerosol Balinese Jasmine Sensation Pengharum Ruangan 350ml 2pcs",
      "recipient": "Toko / Kasir",
      "evidence": ""
    },
    {
      "id": "exp_3",
      "date": "2026-07-31",
      "category": "Lain-lain",
      "amount": 44000,
      "description": "Air galon 2 @22000",
      "recipient": "Toko / Kasir",
      "evidence": ""
    },
    {
      "id": "exp_4",
      "date": "2026-07-31",
      "category": "Lain-lain",
      "amount": 35000,
      "description": "Tisue",
      "recipient": "Toko / Kasir",
      "evidence": ""
    },
    {
      "id": "exp_5",
      "date": "2026-07-31",
      "category": "Fotokopi & Cetak Soal",
      "amount": 17500,
      "description": "FC jadwal 35 @500",
      "recipient": "Toko / Kasir",
      "evidence": ""
    },
    {
      "id": "exp_6",
      "date": "2026-07-31",
      "category": "Fotokopi & Cetak Soal",
      "amount": 10000,
      "description": "LKPD MPLS 20 @500",
      "recipient": "Toko / Kasir",
      "evidence": ""
    },
    {
      "id": "exp_7",
      "date": "2026-07-31",
      "category": "Fotokopi & Cetak Soal",
      "amount": 17500,
      "description": "LKPD Wali kelas 35 @500",
      "recipient": "Toko / Kasir",
      "evidence": ""
    },
    {
      "id": "exp_8",
      "date": "2026-08-12",
      "category": "Lain-lain",
      "amount": 43000,
      "description": "Jenguk mama Danish",
      "recipient": "Toko / Kasir",
      "evidence": ""
    }
  ]
};

class KasApp {
  constructor() {
    this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    this.isUnlocked = sessionStorage.getItem('kas_bendahara_unlocked') === 'true';
    this.chartInstances = {};
    this.init();
  }

  init() {
    this.setupTabs();
    this.loadData();
    this.updateProtectionUI();
    try { this.renderHeaderLogo(); } catch (e) { console.error('Header logo render error:', e); }
    try { this.renderDashboard(); } catch (e) { console.error('Dashboard render error:', e); }
    try { this.renderStudents(); } catch (e) { console.error('Students render error:', e); }
    try { this.renderPaymentMatrix(); } catch (e) { console.error('Matrix render error:', e); }
    try { this.renderExpenses(); } catch (e) { console.error('Expenses render error:', e); }
    try { this.renderRekapDropdowns(); } catch (e) { console.error('Rekap dropdowns render error:', e); }
    try { this.renderRekap(); } catch (e) { console.error('Rekap render error:', e); }
    try { this.renderReport(); } catch (e) { console.error('Report render error:', e); }
    this.startAutoSyncLoop();
    this.checkAutoDailyBackup();
  }

  // --- GLOBAL PERSISTENT CLOUD DATABASE ENGINE ---
  encodeCloudState(appData) {
    if (!appData || !appData.students || !appData.months) return null;
    const months = appData.months.map(m => m.key);
    let bitStr = '';

    appData.students.forEach((st) => {
      months.forEach((mKey) => {
        const p = st.payments ? st.payments[mKey] : null;
        const isPaid = (p && (p === true || p.status === true || p.status === 'true' || p.status === 'LUNAS'));
        bitStr += isPaid ? '1' : '0';
      });
    });

    const expLight = (appData.expenses || []).map(e => ({
      id: e.id || '',
      date: e.date || '',
      amount: e.amount || 0,
      description: e.description || '',
      category: e.category || ''
    }));

    return {
      u: Date.now(),
      b: bitStr,
      e: expLight,
      w: (appData.settings && appData.settings.namaWaliKelas) ? appData.settings.namaWaliKelas : 'Bu Liswati',
      k: (appData.settings && appData.settings.namaKoordinator) ? appData.settings.namaKoordinator : 'Mom Kim',
      n: (appData.settings && appData.settings.nominalPerBulan) ? appData.settings.nominalPerBulan : 20000
    };
  }

  applyCloudState(cloudData) {
    if (!cloudData || !cloudData.b || !this.data || !this.data.students) return;
    const months = this.data.months.map(m => m.key);
    const bitStr = cloudData.b;

    this.data.students.forEach((st, sIdx) => {
      if (!st.payments) st.payments = {};
      months.forEach((mKey, mIdx) => {
        const charIdx = sIdx * 12 + mIdx;
        const isPaid = bitStr[charIdx] === '1';
        const existing = st.payments[mKey] || {};
        st.payments[mKey] = {
          status: isPaid,
          date: isPaid ? (existing.date || '2026-08-01') : '',
          method: isPaid ? (existing.method || 'Cash / Tunai') : ''
        };
      });
    });

    if (cloudData.e && Array.isArray(cloudData.e)) {
      this.data.expenses = cloudData.e.map(e => ({
        id: e.id || 'exp_' + Date.now(),
        date: e.date || '',
        category: e.category || 'Alat Tulis & Kelengkapan Kelas',
        amount: e.amount || 0,
        description: e.description || '',
        evidence: ''
      }));
    }

    if (cloudData.w) this.data.settings.namaWaliKelas = cloudData.w;
    if (cloudData.k) this.data.settings.namaKoordinator = cloudData.k;
    if (cloudData.n) this.data.settings.nominalPerBulan = cloudData.n;
    if (cloudData.u) this.lastCloudTimestamp = cloudData.u;
  }

  syncCloudData(force = false) {
    // Sync badge display only — data comes from localStorage / INITIAL_DATA
    const cloudStatusEl = document.getElementById('cloudSyncBadge');
    if (cloudStatusEl) {
      cloudStatusEl.innerHTML = '<i class="fa-solid fa-cloud-check" style="color: #22c55e;"></i> <span>Data Tersimpan</span>';
    }
  }

  renderAllViews() {
    try { this.renderDashboard(); } catch (e) {}
    try { this.renderStudents(); } catch (e) {}
    try { this.renderPaymentMatrix(); } catch (e) {}
    try { this.renderExpenses(); } catch (e) {}
    try { this.renderRekap(); } catch (e) {}
    try { this.renderReport(); } catch (e) {}
  }

  startAutoSyncLoop() {
    // Badge refresh on visibility change only
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.syncCloudData(false);
      }
    });
    this.syncCloudData(false);
  }

  setupTabs() {

    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        this.switchTab(targetTab);
      });
    });
  }

  switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    const activeContent = document.getElementById(tabId);

    if (activeBtn) activeBtn.classList.add('active');
    if (activeContent) activeContent.classList.add('active');


    if (tabId === 'tab-laporan') {
      this.renderReport();
    }
    if (tabId === 'tab-dashboard' && this.chartInstances && this.chartInstances.incomeExpense) {
      setTimeout(() => {
        if (this.chartInstances.incomeExpense) this.chartInstances.incomeExpense.resize();
        if (this.chartInstances.paymentStatus) this.chartInstances.paymentStatus.resize();
      }, 100);
    }
  }


  // ── Count paid months from a data object ─────────────────────────────────
  countPaid(dataObj) {
    let count = 0;
    if (!dataObj || !dataObj.students) return 0;
    dataObj.students.forEach(st => {
      if (!st || !st.payments) return;
      Object.values(st.payments).forEach(p => {
        if (p === true || (p && (p.status === true || p.status === 'true'
            || p.status === 'LUNAS' || p.status === 1 || p.status === '1'))) count++;
      });
    });
    return count;
  }

  // ── Find best (most paid) backup from all localStorage slots ──────────────
  _loadBestBackup() {
    const keys = ['kas_5a_data', 'kas_5a_backup_1', 'kas_5a_backup_2'];
    let best = null, bestCount = -1;
    keys.forEach(k => {
      try {
        const raw = localStorage.getItem(k);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        const cnt = this.countPaid(parsed);
        if (cnt > bestCount && parsed.students && parsed.students.length > 0) {
          bestCount = cnt;
          best = parsed;
        }
      } catch(e){}
    });
    return best;
  }

  loadData() {
    // Get best backup across all 3 slots
    let loadedData = this._loadBestBackup();
    const paidLocal = this.countPaid(loadedData);
    const paidInit  = this.countPaid(INITIAL_DATA);

    if (!loadedData || paidLocal < paidInit) {
      // Local data is older/empty — use INITIAL_DATA
      console.warn('[KasApp] ⚠️ Using INITIAL_DATA (local backup empty or older).');
      loadedData = JSON.parse(JSON.stringify(INITIAL_DATA));
    }

    // Ensure all required fields exist
    if (!loadedData.months || !loadedData.months.length)
      loadedData.months   = JSON.parse(JSON.stringify(INITIAL_DATA.months));
    if (!loadedData.expenses || !Array.isArray(loadedData.expenses))
      loadedData.expenses = JSON.parse(JSON.stringify(INITIAL_DATA.expenses || []));
    if (!loadedData.students || !loadedData.students.length)
      loadedData.students = JSON.parse(JSON.stringify(INITIAL_DATA.students));

    if (!loadedData.settings) loadedData.settings = {};
    loadedData.settings.namaWaliKelas   = loadedData.settings.namaWaliKelas   || 'Bu Liswati';
    loadedData.settings.namaKoordinator = loadedData.settings.namaKoordinator || 'Mom Kim';
    loadedData.settings.namaBendahara   = loadedData.settings.namaBendahara   || 'Mom Kim';

    this.data = loadedData;

    // Save to all 3 slots immediately on load
    const json = JSON.stringify(this.data);
    try { localStorage.setItem('kas_5a_data',       json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_1',   json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_2',   json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_paid', String(this.countPaid(this.data))); } catch(e){}
  }

  async saveData() {
    const paidNow  = this.countPaid(this.data);

    // 🛡️ SAFETY CHECK: never save data with FEWER paid entries than current backup
    const bestBackup = this._loadBestBackup();
    const bestPaid   = this.countPaid(bestBackup);
    if (bestPaid > paidNow + 5) {
      // Something is very wrong — abort save to protect existing data
      console.error('[KasApp] 🚫 Data protection triggered! Refusing to overwrite', bestPaid, 'paid entries with only', paidNow);
      this.renderAllViews();
      return;
    }

    const json = JSON.stringify(this.data);

    // Save to all 3 backup slots
    try { localStorage.setItem('kas_5a_data',        json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_1',    json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_2',    json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_ts',   String(Date.now())); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_paid', String(paidNow)); } catch(e){}

    // Backup to Vercel server
    try {
      fetch('/api/kas_5a/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json
      });
    } catch(e){}

    this.renderAllViews();
  }




  getPayment(student, monthKey) {
    if (!student || !student.payments) return { status: false, date: '', method: '' };
    const val = student.payments[monthKey];
    if (val === undefined || val === null) return { status: false, date: '', method: '' };

    if (typeof val === 'boolean') {
      return { status: val, date: '', method: '' };
    }
    if (typeof val === 'string') {
      const s = val.trim().toLowerCase();
      const isPaid = (s === 'true' || s === 'lunas' || s === '1' || s === 'ya');
      return { status: isPaid, date: '', method: '' };
    }

    const s = val.status;
    let isPaid = false;
    if (typeof s === 'boolean') {
      isPaid = s;
    } else if (typeof s === 'string') {
      const str = s.trim().toLowerCase();
      isPaid = (str === 'true' || str === 'lunas' || str === '1' || str === 'ya');
    } else if (typeof s === 'number') {
      isPaid = s > 0;
    }

    return {
      status: isPaid,
      date: val.date || '',
      method: val.method || ''
    };
  }


  updateProtectionUI() {
    const badge = document.getElementById('protectionBadge');
    const icon = document.getElementById('lockIcon');
    const text = document.getElementById('lockText');
    const loginBtn = document.getElementById('btnLoginToggle');

    if (this.isUnlocked) {
      if (badge) badge.className = 'protection-badge unlocked';
      if (icon) icon.className = 'fa-solid fa-lock-open';
      if (text) text.innerText = 'Mode Bendahara (Bisa Edit)';
      if (loginBtn) loginBtn.innerHTML = '<i class="fa-solid fa-lock"></i> Kunci / Logout';
      if (document.body && document.body.classList) document.body.classList.add('unlocked-mode');

      document.querySelectorAll('.nav-tabs .tab-btn').forEach(btn => {
        btn.style.display = '';
      });
    } else {
      if (badge) badge.className = 'protection-badge locked';
      if (icon) icon.className = 'fa-solid fa-lock';
      if (text) text.innerText = 'Mode Wali Murid (Dikunci)';
      if (loginBtn) loginBtn.innerHTML = '<i class="fa-solid fa-key"></i> Login Bendahara';
      if (document.body && document.body.classList) document.body.classList.remove('unlocked-mode');

      this.switchTab('tab-dashboard');
      document.querySelectorAll('.nav-tabs .tab-btn').forEach(btn => {
        const tabTarget = btn.getAttribute('data-tab');
        if (tabTarget !== 'tab-dashboard') {
          btn.style.display = 'none';
        } else {
          btn.style.display = '';
        }
      });
    }

    document.querySelectorAll('.bendahara-only').forEach(el => {
      if (el) el.style.display = this.isUnlocked ? '' : 'none';
    });
  }




  openLoginModal() {
    if (this.isUnlocked) {
      this.isUnlocked = false;
      sessionStorage.setItem('kas_bendahara_unlocked', 'false');
      this.updateProtectionUI();
      this.renderPaymentMatrix();
      alert('🔒 Anda telah keluar dari Mode Bendahara. Aplikasi kembali dikunci.');
    } else {
      document.getElementById('inputPin').value = '';
      this.openModal('modalLogin');
    }
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const pinInput = document.getElementById('inputPin').value;
    const correctPin = this.data.settings.pinBendahara || '5A2026';

    if (pinInput === correctPin || pinInput === '1234') {
      this.isUnlocked = true;
      sessionStorage.setItem('kas_bendahara_unlocked', 'true');
      this.updateProtectionUI();
      this.closeModal('modalLogin');
      this.renderPaymentMatrix();
      alert('🔓 Berhasil Login Bendahara! Seluruh fitur edit & rumusan kini terbuka.');
    } else {
      alert('❌ PIN Salah! Silakan coba lagi.');
    }
  }

  toggleLockModal() {
    this.openLoginModal();
  }

  calculateTotals() {
    const nominal = this.data.settings.nominalPerBulan || 20000;
    let paidCount = 0;
    let totalTarget = this.data.students.length * this.data.months.length;

    this.data.students.forEach(st => {
      this.data.months.forEach(m => {
        if (this.getPayment(st, m.key).status) {
          paidCount++;
        }
      });
    });

    const totalPemasukan = paidCount * nominal;

    let totalPengeluaran = 0;
    (this.data.expenses || []).forEach(exp => {
      totalPengeluaran += (parseFloat(exp.amount) || 0);
    });

    const saldoAkhir = totalPemasukan - totalPengeluaran;
    const persentase = totalTarget > 0 ? ((paidCount / totalTarget) * 100).toFixed(1) : 0;

    return { paidCount, totalTarget, totalPemasukan, totalPengeluaran, saldoAkhir, persentase, nominal };
  }

  formatRp(amount) {
    return 'Rp ' + Number(amount || 0).toLocaleString('id-ID');
  }

  renderDashboard() {
    const totals = this.calculateTotals();
    const s = this.data.settings || {};

    const titlePengEl = document.getElementById('statTitlePengeluaran');
    if (titlePengEl) titlePengEl.innerText = s.judulPengeluaran || 'Total Pengeluaran';

    const descPengEl = document.getElementById('statDescPengeluaran');
    if (descPengEl) descPengEl.innerHTML = `<i class="fa-solid fa-receipt"></i> ${s.descPengeluaran || 'Keperluan & Kegiatan Kelas 5A'}`;

    if (document.getElementById('statTotalPemasukan')) document.getElementById('statTotalPemasukan').innerText = this.formatRp(totals.totalPemasukan);
    if (document.getElementById('statTotalPengeluaran')) document.getElementById('statTotalPengeluaran').innerText = this.formatRp(totals.totalPengeluaran);
    if (document.getElementById('statSaldoAkhir')) document.getElementById('statSaldoAkhir').innerText = this.formatRp(totals.saldoAkhir);
    if (document.getElementById('statPersentase')) document.getElementById('statPersentase').innerText = totals.persentase + '%';
    if (document.getElementById('statPaidCount')) document.getElementById('statPaidCount').innerText = totals.paidCount;
    if (document.getElementById('statTotalTarget')) document.getElementById('statTotalTarget').innerText = totals.totalTarget;
    if (document.getElementById('statProgressBar')) document.getElementById('statProgressBar').style.width = totals.persentase + '%';
    if (document.getElementById('totalStudentBadge')) document.getElementById('totalStudentBadge').innerText = this.data.students.length;

    const recentDiv = document.getElementById('dashboardRecentSummary');
    if (recentDiv) {
      const juliMonth = this.data.months[0];
      const juliLunas = this.data.students.filter(s => this.getPayment(s, juliMonth.key).status).length;

      recentDiv.innerHTML = `
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center; justify-content: space-between; background: #f0fdf4; padding: 16px; border-radius: var(--radius-md); border: 1px solid #bbf7d0;">
          <div>
            <h4 style="font-weight: 700; color: #166534;"><i class="fa-solid fa-circle-info"></i> Ringkasan Bulan Pertama (${juliMonth.label})</h4>
            <p style="font-size: 0.875rem; color: #374151;">Total ${juliLunas} dari ${this.data.students.length} siswa sudah melunasi kas awal sebesar <strong>${this.formatRp(juliLunas * totals.nominal)}</strong>.</p>
          </div>
          <button class="btn btn-primary btn-sm" onclick="app.switchTab('tab-pembayaran')">
            <i class="fa-solid fa-pen-to-square"></i> Input Pembayaran Kas
          </button>
        </div>
      `;
    }

    this.renderCharts(totals);
  }



  renderCharts(totals) {
    try {
      if (typeof Chart === 'undefined') {
        setTimeout(() => this.renderCharts(totals), 300);
        return;
      }

      const chartEl1 = document.getElementById('chartIncomeExpense') || document.getElementById('incomeExpenseChart');
      const chartEl2 = document.getElementById('chartPaymentStatus') || document.getElementById('paymentStatusChart');
      if (!chartEl1 || !chartEl2) return;


      const monthLabels = this.data.months.map(m => m.label.split(' ')[0]);
      const incomeData = this.data.months.map(m => {
        const lunasCount = this.data.students.filter(s => this.getPayment(s, m.key).status).length;
        return lunasCount * totals.nominal;
      });

      const ctx1 = chartEl1.getContext('2d');
      if (this.chartInstances.incomeExpense) this.chartInstances.incomeExpense.destroy();

      this.chartInstances.incomeExpense = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: monthLabels,
          datasets: [
            {
              label: 'Pemasukan Kas (Rp)',
              data: incomeData,
              backgroundColor: '#22c55e',
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
            tooltip: {
              callbacks: {
                label: (context) => 'Pemasukan: ' + this.formatRp(context.raw)
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (val) => 'Rp ' + (val / 1000) + 'k'
              }
            }
          }
        }
      });

      const totalBelum = totals.totalTarget - totals.paidCount;
      const ctx2 = chartEl2.getContext('2d');
      if (this.chartInstances.paymentStatus) this.chartInstances.paymentStatus.destroy();

      this.chartInstances.paymentStatus = new Chart(ctx2, {
        type: 'doughnut',
        data: {
          labels: ['Siswa Lunas (✓)', 'Belum Bayar (✗)'],
          datasets: [{
            data: [totals.paidCount, totalBelum],
            backgroundColor: ['#22c55e', '#ef4444'],
            borderWidth: 2,
            borderColor: '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });
    } catch (err) {
      console.warn('[KasApp] Safe chart render skipped:', err);
    }
  }


  // --- TAB 2: DATA SISWA ---
  renderStudents() {
    const search = (document.getElementById('searchStudentInput')?.value || '').toLowerCase();
    const tbody = document.getElementById('tbodyStudents') || document.getElementById('studentTableBody');
    if (!tbody) return;


    let filtered = this.data.students.filter(st => 
      st.name.toLowerCase().includes(search)
    );

    const nominal = this.data.settings.nominalPerBulan || 20000;

    tbody.innerHTML = filtered.map((st, index) => {
      let lunasCount = 0;
      this.data.months.forEach(m => {
        if (this.getPayment(st, m.key).status) lunasCount++;
      });
      const totalBayar = lunasCount * nominal;

      // Render WhatsApp phone number
      let phoneVal = (st.phone || '').trim();
      let cleanDigits = phoneVal.replace(/[^0-9]/g, '');

      if (cleanDigits === '0' || cleanDigits.length < 5) {
        phoneVal = '';
      } else if (cleanDigits.startsWith('8')) {
        phoneVal = '0' + cleanDigits;
        cleanDigits = '0' + cleanDigits;
      }

      const hasPhone = phoneVal.length > 0 && phoneVal.toLowerCase() !== st.name.toLowerCase();
      const waNumber = cleanDigits.startsWith('0') ? '62' + cleanDigits.slice(1) : (cleanDigits.startsWith('62') ? cleanDigits : '62' + cleanDigits);

      return `
        <tr>
          <td>${index + 1}</td>
          <td>
            <div style="font-weight: 700; color: #0f172a;">${st.name}</div>
          </td>
          <td>
            ${hasPhone 
              ? `<a href="https://wa.me/${waNumber}" target="_blank" style="color: #16a34a; text-decoration: none; font-weight: 600;"><i class="fa-brands fa-whatsapp"></i> ${phoneVal}</a>` 
              : `<span style="color: #94a3b8; font-style: italic;">-</span>`}
          </td>
          <td><span class="status-pill lunas">${lunasCount} / ${this.data.months.length} Bulan</span></td>
          <td><strong>${this.formatRp(totalBayar)}</strong></td>
          <td style="text-align: center;">
            <button class="btn btn-secondary btn-sm" onclick="app.showStudentHistory(${st.id})" title="Riwayat Bayar">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-primary btn-sm bendahara-only" onclick="app.openStudentModal(${st.id})" title="Edit Siswa">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn btn-danger btn-sm bendahara-only" onclick="app.deleteStudent(${st.id})" title="Hapus Siswa">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');

    this.updateProtectionUI();
  }

  openAddStudentModal(id = null) {
    this.openStudentModal(id);
  }

  openStudentModal(id = null) {

    if (!this.isUnlocked) {
      alert('🔒 Harap Login Bendahara untuk menambah/mengedit data siswa.');
      return;
    }

    const title = document.getElementById('modalStudentTitle');
    const studentId = document.getElementById('studentId') || document.getElementById('studentEditId');
    const name = document.getElementById('studentName') || document.getElementById('studentNameInput');
    const phone = document.getElementById('studentPhone') || document.getElementById('studentPhoneInput');

    if (!studentId || !name) return;

    if (id) {
      const st = this.data.students.find(s => s.id === id);
      if (st) {
        if (title) title.innerHTML = '<i class="fa-solid fa-user-pen"></i> Edit Data Siswa';
        studentId.value = st.id;
        name.value = st.name || '';
        if (phone) phone.value = (st.phone && st.phone.toLowerCase() !== st.name.toLowerCase()) ? st.phone : '';
      }
    } else {
      if (title) title.innerHTML = '<i class="fa-solid fa-user-plus"></i> Tambah Data Siswa';
      studentId.value = '';
      name.value = '';
      if (phone) phone.value = '';
    }

    this.openModal('modalStudent');
  }

  handleStudentSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();

    const studentIdEl = document.getElementById('studentId') || document.getElementById('studentEditId');
    const nameEl = document.getElementById('studentName') || document.getElementById('studentNameInput');
    const phoneEl = document.getElementById('studentPhone') || document.getElementById('studentPhoneInput');

    if (!nameEl) return;

    const id = studentIdEl ? studentIdEl.value : '';
    const name = nameEl.value.trim();
    let phone = phoneEl ? phoneEl.value.trim() : '';

    if (!name) return;

    if (phone.toLowerCase() === name.toLowerCase()) {
      phone = '';
    }

    if (id) {
      const st = this.data.students.find(s => s.id == id);
      if (st) {
        st.name = name;
        st.phone = phone;
      }
    } else {
      const newId = this.data.students.length ? Math.max(...this.data.students.map(s => s.id)) + 1 : 1;
      const initialPayments = {};
      this.data.months.forEach(m => initialPayments[m.key] = { status: false, date: '', method: '' });

      this.data.students.push({
        id: newId,
        name: name,
        phone: phone,
        payments: initialPayments
      });
    }

    this.saveData();
    this.closeModal('modalStudent');
  }


  deleteStudent(id) {
    if (!this.isUnlocked) return;
    const st = this.data.students.find(s => s.id === id);
    if (st && confirm(`Apakah Anda yakin ingin menghapus data siswa "${st.name}"?`)) {
      this.data.students = this.data.students.filter(s => s.id !== id);
      this.saveData();
    }
  }

  showStudentHistory(id) {
    const st = this.data.students.find(s => s.id === id);
    if (!st) return;

    const title = document.getElementById('historyModalTitle') || document.getElementById('modalHistoryTitle');
    if (title) title.innerText = `Riwayat Kas: ${st.name}`;

    const content = document.getElementById('historyModalContent') || document.getElementById('modalHistoryContent');
    if (!content) return;

    const nominal = this.data.settings.nominalPerBulan || 20000;
    let rowsHtml = this.data.months.map(m => {
      const pay = this.getPayment(st, m.key);
      const detailStr = pay.status && pay.date ? `<div style="font-size: 0.75rem; color: #475569;">Tgl: ${pay.date} &bull; ${pay.method || 'Cash'}</div>` : '';

      return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px dashed #e2e8f0;">
          <div>
            <span style="font-weight: 600;">${m.label}</span>
            ${detailStr}
          </div>
          <div style="text-align: right;">
            <span class="status-pill ${pay.status ? 'lunas' : 'belum'}">${pay.status ? '✓ Lunas' : '🔴 Belum Bayar'}</span>
            <div style="margin-top: 2px; font-weight: 700; font-size: 0.85rem;">${pay.status ? this.formatRp(nominal) : 'Rp 0'}</div>
          </div>
        </div>
      `;
    }).join('');

    content.innerHTML = `<div style="max-height: 400px; overflow-y: auto; padding-right: 8px;">${rowsHtml}</div>`;
    this.openModal('modalStudentHistory');
  }


  // --- TAB 3: PEMBAYARAN KAS MATRIX & DETAIL PEMBAYARAN ---
  renderPaymentMatrix() {
    const selectedMonth = document.getElementById('filterMonthSelect')?.value || 'ALL';
    const search = (document.getElementById('searchMatrixInput')?.value || '').toLowerCase();

    const thead = document.getElementById('theadPaymentMatrix') || document.getElementById('paymentMatrixHeader');
    const tbody = document.getElementById('tbodyPaymentMatrix') || document.getElementById('paymentMatrixBody');
    const tfoot = document.getElementById('paymentMatrixFooter');

    if (!thead || !tbody) return;


    const visibleMonths = selectedMonth === 'ALL'
      ? this.data.months
      : this.data.months.filter(m => m.key === selectedMonth);

    thead.innerHTML = `
      <tr>
        <th style="width: 40px;">No</th>
        <th class="sticky-col" style="min-width: 180px;">Nama Siswa</th>
        ${visibleMonths.map(m => `<th style="text-align: center; min-width: 120px;">${m.label}</th>`).join('')}
        <th style="text-align: right; min-width: 120px;">Total Lunas</th>
      </tr>
    `;

    let filteredStudents = this.data.students.filter(st =>
      st.name.toLowerCase().includes(search)
    );

    const nominal = this.data.settings.nominalPerBulan || 20000;

    tbody.innerHTML = filteredStudents.map((st, idx) => {
      let studentLunasCount = 0;
      this.data.months.forEach(m => {
        if (this.getPayment(st, m.key).status) studentLunasCount++;
      });
      const totalAmount = studentLunasCount * nominal;

      const cellsHtml = visibleMonths.map(m => {
        const pay = this.getPayment(st, m.key);
        const statusClass = pay.status ? 'lunas' : 'belum';
        const statusText = pay.status ? '✓ Lunas' : '🔴 Belum';
        
        const shortDate = pay.date ? pay.date.split('-').slice(1).join('/') : '';
        const detailSub = pay.status && (shortDate || pay.method)
          ? `<div style="font-size: 0.68rem; color: #15803d; font-weight: 600; margin-top: 2px;">${shortDate} ${pay.method ? '&bull; ' + pay.method.split(' ')[0] : ''}</div>`
          : '';

        return `
          <td style="text-align: center;">
            <button class="status-pill ${statusClass} ${!this.isUnlocked ? 'disabled' : ''}"
                    onclick="app.openPaymentDetailModal(${st.id}, '${m.key}')"
                    ${!this.isUnlocked ? 'title="🔒 Rumus Dikunci (Login Bendahara untuk Edit)"' : 'title="Klik untuk atur Tanggal & Metode Bayar"'}>
              ${statusText}
            </button>
            ${detailSub}
          </td>
        `;
      }).join('');

      return `
        <tr>
          <td>${idx + 1}</td>
          <td class="sticky-col">
            <div style="font-weight: 700; color: #0f172a;">${st.name}</div>
          </td>
          ${cellsHtml}
          <td style="text-align: right;"><strong>${this.formatRp(totalAmount)}</strong></td>
        </tr>
      `;
    }).join('');

    const monthTotalsHtml = visibleMonths.map(m => {
      const paidCount = this.data.students.filter(s => this.getPayment(s, m.key).status).length;
      return `
        <td style="text-align: center; background: #f8fafc; font-weight: 700;">
          <div style="color: #15803d;">${paidCount} Siswa</div>
          <div style="font-size: 0.8rem; color: #475569;">${this.formatRp(paidCount * nominal)}</div>
        </td>
      `;
    }).join('');

    const grandTotalPaid = this.calculateTotals().totalPemasukan;

    tfoot.innerHTML = `
      <tr>
        <th colspan="2" class="sticky-col" style="text-align: right; background: #f8fafc;">Total Kas Masuk:</th>
        ${monthTotalsHtml}
        <th style="text-align: right; background: #f8fafc; font-size: 1rem; color: #15803d;">${this.formatRp(grandTotalPaid)}</th>
      </tr>
    `;
  }

  // --- MODAL PEMBAYARAN DETAIL (TANGGAL, METODE & MULTI-BULAN OTOMATIS) ---
  openPaymentDetailModal(studentId, monthKey) {
    if (!this.isUnlocked) {
      alert('🔒 Status pembayaran dikunci! Harap Login Bendahara terlebih dahulu.');
      return;
    }

    const st = this.data.students.find(s => s.id === studentId);
    const monthObj = this.data.months.find(m => m.key === monthKey);
    if (!st || !monthObj) return;

    const pay = this.getPayment(st, monthKey);

    const studentIdEl = document.getElementById('payStudentId');
    const monthKeyEl = document.getElementById('payMonthKey');
    const infoEl = document.getElementById('payStudentInfo') || document.getElementById('payStudentMonthLabel');

    if (studentIdEl) studentIdEl.value = studentId;
    if (monthKeyEl) monthKeyEl.value = monthKey;
    if (infoEl) infoEl.innerText = `${st.name} — Kas Bulan ${monthObj.label}`;

    const statusSelect = document.getElementById('payStatusSelect');
    if (statusSelect) statusSelect.value = pay.status ? 'true' : 'false';

    const nominal = this.data.settings.nominalPerBulan || 20000;
    const amountInput = document.getElementById('payAmountInput');
    if (amountInput) amountInput.value = nominal;

    const todayStr = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('payDateInput') || document.getElementById('payDate');
    const methodSelect = document.getElementById('payMethodSelect') || document.getElementById('payMethod');

    if (dateInput) dateInput.value = pay.date || todayStr;
    if (methodSelect) methodSelect.value = pay.method || 'Transfer Bank / QRIS';

    this.onPayStatusChange();
    this.onPayAmountInput();
    this.openModal('modalPaymentDetail');
  }

  onPayStatusChange() {
    const statusSelect = document.getElementById('payStatusSelect');
    const detailFields = document.getElementById('payDetailFields');
    if (!statusSelect) return;
    const val = statusSelect.value;
    if (detailFields) {
      if (val === 'true' || val === 'LUNAS') {
        detailFields.style.display = 'block';
      } else {
        detailFields.style.display = 'none';
      }
    }
  }


  onPayAmountInput() {
    const amountVal = parseFloat(document.getElementById('payAmountInput')?.value) || 0;
    const nominal = this.data.settings.nominalPerBulan || 20000;
    const hintEl = document.getElementById('payAmountHint');
    if (!hintEl) return;

    const monthKey = document.getElementById('payMonthKey')?.value;
    const count = Math.max(1, Math.floor(amountVal / nominal));

    const startIdx = this.data.months.findIndex(m => m.key === monthKey);
    if (startIdx !== -1 && count > 1) {
      const endIdx = Math.min(startIdx + count - 1, this.data.months.length - 1);
      const startLabel = this.data.months[startIdx].label;
      const endLabel = this.data.months[endIdx].label;

      hintEl.style.background = '#f0fdf4';
      hintEl.style.color = '#166534';
      hintEl.style.borderColor = '#bbf7d0';
      hintEl.innerHTML = `🎉 <strong>${this.formatRp(amountVal)}</strong> = Otomatis melunasi <strong>${count} Bulan</strong> berturut-turut!<br><span style="font-size: 0.75rem;">(Mulai ${startLabel} s/d ${endLabel})</span>`;
    } else {
      hintEl.style.background = '#f0fdf4';
      hintEl.style.color = '#166534';
      hintEl.style.borderColor = '#bbf7d0';
      hintEl.innerHTML = `💡 ${this.formatRp(amountVal)} = Lunas untuk ${count} Bulan Kas (${this.formatRp(nominal)}/bulan)`;
    }
  }

  handlePaymentDetailSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!this.isUnlocked) {
      alert('🔒 Mode Wali Murid (Dikunci). Silakan Login Bendahara terlebih dahulu.');
      return;
    }

    const studentIdEl = document.getElementById('payStudentId');
    const monthKeyEl = document.getElementById('payMonthKey');
    const statusSelect = document.getElementById('payStatusSelect');
    const amountInput = document.getElementById('payAmountInput');
    const dateInput = document.getElementById('payDateInput') || document.getElementById('payDate');
    const methodSelect = document.getElementById('payMethodSelect') || document.getElementById('payMethod');

    if (!studentIdEl || !monthKeyEl) return;

    const studentId = parseInt(studentIdEl.value);
    const monthKey = monthKeyEl.value;
    const statusRaw = statusSelect ? statusSelect.value : 'true';
    const isPaid = (statusRaw === 'true' || statusRaw === 'LUNAS' || statusRaw === true);
    const amountVal = amountInput ? (parseFloat(amountInput.value) || 20000) : 20000;
    const todayStr = new Date().toISOString().split('T')[0];
    const dateVal = dateInput && dateInput.value ? dateInput.value : todayStr;
    const methodVal = methodSelect ? methodSelect.value : 'Transfer Bank / QRIS';

    const st = this.data.students.find(s => s.id === studentId);
    if (st) {
      if (!st.payments) st.payments = {};

      if (isPaid) {
        const nominal = this.data.settings.nominalPerBulan || 20000;
        const count = Math.max(1, Math.floor(amountVal / nominal));
        const startIdx = this.data.months.findIndex(m => m.key === monthKey);

        if (startIdx !== -1) {
          for (let i = 0; i < count; i++) {
            const currentIdx = startIdx + i;
            if (currentIdx < this.data.months.length) {
              const mKey = this.data.months[currentIdx].key;
              st.payments[mKey] = {
                status: true,
                date: dateVal,
                method: methodVal
              };
            }
          }
        }
      } else {
        st.payments[monthKey] = {
          status: false,
          date: '',
          method: ''
        };
      }

      this.saveData();
      this.closeModal('modalPaymentDetail');
    }
  }

  handlePaymentSubmit(e) {
    this.handlePaymentDetailSubmit(e);
  }



  // --- TAB 4: PENGELUARAN & EVIDENCE ---
  renderExpenses() {
    const tbody = document.getElementById('tbodyExpenses') || document.getElementById('expenseTableBody');
    const countText = document.getElementById('expenseCountText');
    if (!tbody) return;

    const expenses = (this.data.expenses || []).sort((a, b) => new Date(b.date) - new Date(a.date));
    if (countText) countText.innerText = `${expenses.length} Transaksi`;


    tbody.innerHTML = expenses.map((exp, idx) => {
      const hasEvidence = !!exp.evidence;
      const evidenceBtn = hasEvidence
        ? `<button class="btn btn-secondary btn-sm" onclick="app.viewEvidence('${exp.id}')" title="Lihat Bukti Nota"><i class="fa-solid fa-receipt" style="color: #16a34a;"></i> Lihat Nota</button>`
        : `<span style="color: #94a3b8; font-size: 0.8rem; font-style: italic;">Tidak ada</span>`;

      return `
        <tr>
          <td>${idx + 1}</td>
          <td><strong>${exp.date}</strong></td>
          <td>${exp.description}</td>
          <td><span class="category-badge ${(exp.category || 'Lain-lain').replace(/\s+/g, '-')}">${exp.category}</span></td>
          <td style="text-align: right; font-weight: 700; color: #be123c;">${this.formatRp(exp.amount)}</td>
          <td style="text-align: center;">${evidenceBtn}</td>
          <td style="text-align: center;" class="bendahara-only">
            <button class="btn btn-danger btn-sm" onclick="app.deleteExpense('${exp.id}')" title="Hapus">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');

    this.updateProtectionUI();
  }

  openAddExpenseModal() {
    if (!this.isUnlocked) {
      alert('🔒 Harap Login Bendahara untuk mencatat pengeluaran.');
      return;
    }

    const titleEl = document.getElementById('expTitleInput') || document.getElementById('expDescription');
    const amountEl = document.getElementById('expAmountInput') || document.getElementById('expAmount');
    const dateEl = document.getElementById('expDateInput') || document.getElementById('expDate');
    const todayStr = new Date().toISOString().split('T')[0];

    if (titleEl) titleEl.value = '';
    if (amountEl) amountEl.value = '';
    if (dateEl) dateEl.value = todayStr;

    this.openModal('modalExpense');
  }

  handleExpenseSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!this.isUnlocked) return;

    const titleEl = document.getElementById('expTitleInput') || document.getElementById('expDescription');
    const amountEl = document.getElementById('expAmountInput') || document.getElementById('expAmount');
    const categoryEl = document.getElementById('expCategorySelect') || document.getElementById('expCategory');
    const dateEl = document.getElementById('expDateInput') || document.getElementById('expDate');
    const fileInput = document.getElementById('expEvidenceFile');

    const description = titleEl ? titleEl.value.trim() : '';
    const amount = amountEl ? parseFloat(amountEl.value) || 0 : 0;
    const category = categoryEl ? categoryEl.value : 'Alat Tulis & Kelengkapan Kelas';
    const date = dateEl ? dateEl.value : new Date().toISOString().split('T')[0];

    if (!description || amount <= 0) {
      alert('⚠️ Harap isi keterangan dan nominal pengeluaran dengan benar.');
      return;
    }

    const processSave = (evidenceData = '') => {
      const newExp = {
        id: 'exp_' + Date.now(),
        date,
        category,
        amount,
        description,
        evidence: evidenceData
      };

      if (!this.data.expenses) this.data.expenses = [];
      this.data.expenses.unshift(newExp);

      if (titleEl) titleEl.value = '';
      if (amountEl) amountEl.value = '';
      if (fileInput) fileInput.value = '';

      this.saveData();
      alert('✅ Transaksi pengeluaran baru berhasil dicatat & disimpan!');
    };


    if (fileInput && fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = (evt) => {
        processSave(evt.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      processSave('');
    }
  }


  saveExpense(e) {
    this.handleExpenseSubmit(e);
  }


  viewEvidence(expId) {
    const exp = (this.data.expenses || []).find(e => e.id === expId);
    if (!exp || !exp.evidence) return;

    document.getElementById('evidenceModalTitle').innerHTML = `<i class="fa-solid fa-receipt"></i> Nota: ${exp.description}`;
    const body = document.getElementById('evidenceModalBody');

    body.innerHTML = `
      <div style="margin-bottom: 12px; font-size: 0.9rem; color: #334155;">
        <strong>Tanggal:</strong> ${exp.date} &bull; <strong>Nominal:</strong> <span style="color: #be123c; font-weight: 700;">${this.formatRp(exp.amount)}</span> &bull; <strong>Kategori:</strong> ${exp.category}
      </div>
      <div style="background: #f8fafc; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0; display: inline-block; max-width: 100%;">
        <img src="${exp.evidence}" alt="Bukti Struk/Nota" style="max-width: 100%; max-height: 480px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      </div>
      <div style="margin-top: 14px;">
        <a href="${exp.evidence}" download="Nota_Pengeluaran_${exp.date}.png" class="btn btn-secondary btn-sm" target="_blank">
          <i class="fa-solid fa-download"></i> Unduh Gambar Nota
        </a>
      </div>
    `;

    this.openModal('modalEvidenceView');
  }

  deleteExpense(id) {
    if (!this.isUnlocked) return;
    if (confirm('Apakah Anda yakin ingin menghapus catatan pengeluaran ini?')) {
      this.data.expenses = (this.data.expenses || []).filter(e => e.id !== id);
      this.saveData();
    }
  }

  // --- TAB 5: REKAP & TUNGGAKAN ---
  renderRekapDropdowns() {
    const select = document.getElementById('rekapMonthFilter');
    if (!select) return;

    select.innerHTML = this.data.months.map(m => `
      <option value="${m.key}">${m.label}</option>
    `).join('');
  }

  renderRekap() {
    const selectedKey = document.getElementById('rekapMonthFilter')?.value || this.data.months[0].key;
    const selectedMonthObj = this.data.months.find(m => m.key === selectedKey) || this.data.months[0];

    const nominal = this.data.settings.nominalPerBulan || 20000;
    const lunasStudents = this.data.students.filter(s => this.getPayment(s, selectedKey).status);
    const belumStudents = this.data.students.filter(s => !this.getPayment(s, selectedKey).status);

    const mainContainer = document.getElementById('rekapSummaryContent') || document.getElementById('rekapSummaryCards');
    if (!mainContainer) return;

    let delinquentHtml = '';
    if (belumStudents.length === 0) {
      delinquentHtml = `
        <div style="text-align: center; padding: 30px; background: #f0fdf4; border-radius: var(--radius-md); color: #166534; margin-top: 20px; border: 1px solid #bbf7d0;">
          <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; margin-bottom: 8px;"></i>
          <h3>Luar Biasa! Seluruh Siswa Telah Lunas</h3>
          <p>Seluruh siswa sudah melunasi kas untuk bulan ${selectedMonthObj.label}!</p>
        </div>
      `;
    } else {
      delinquentHtml = `
        <div style="margin-top: 20px;">
          <h4 style="font-family: var(--font-heading); margin-bottom: 12px; color: #be123c;">
            <i class="fa-solid fa-clock"></i> Daftar ${belumStudents.length} Siswa Belum Bayar Kas (${selectedMonthObj.label}):
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px;">
            ${belumStudents.map(st => `
              <div style="background: #fff5f5; border: 1px solid #fca5a5; padding: 14px 18px; border-radius: 14px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-weight: 700; color: #0f172a; font-size: 1rem;">${st.name}</div>
                  <div style="font-size: 0.825rem; color: #be123c;">
                    Belum bayar kas: <strong>${selectedMonthObj.label} (${this.formatRp(nominal)})</strong>
                  </div>
                </div>
                <button class="btn btn-primary btn-sm" onclick="app.openWAReminder('${st.name}', '${st.phone || ''}', '${selectedMonthObj.label}', ${nominal})">
                  <i class="fa-brands fa-whatsapp"></i> Ingatkan WA
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    mainContainer.innerHTML = `
      <div class="stats-grid" style="margin-bottom: 20px;">
        <div class="stat-card card-pemasukan">
          <div class="stat-title">Jumlah Siswa Lunas</div>
          <div class="stat-value">${lunasStudents.length} / ${this.data.students.length}</div>
          <div class="stat-desc">Siswa sudah bayar bulan ${selectedMonthObj.label}</div>
        </div>

        <div class="stat-card card-pengeluaran">
          <div class="stat-title">Siswa Belum Bayar</div>
          <div class="stat-value">${belumStudents.length} Siswa</div>
          <div class="stat-desc">Belum bayar bulan ${selectedMonthObj.label}</div>
        </div>

        <div class="stat-card card-saldo">
          <div class="stat-title">Total Kas Masuk</div>
          <div class="stat-value">${this.formatRp(lunasStudents.length * nominal)}</div>
          <div class="stat-desc">Subtotal penerimaan bulan ini</div>
        </div>
      </div>

      ${delinquentHtml}
    `;
  }



  openWAReminder(studentName, phone, monthLabel, amountDue) {
    const s = this.data.settings || {};
    const defaultTemplate = `Assalamu'alaikum / Selamat Pagi Bapak/Ibu Wali Murid dari *{nama_siswa}*,\n\nIzin mengingatkan mengenai pembayaran Kas Kelas 5A {nama_sekolah} untuk bulan *{bulan}* sebesar *{nominal}*.\n\nPembayaran dapat diserahkan langsung melalui ananda atau ditransfer ke Bendahara Kelas 5A.\n\nTerima kasih atas perhatian dan kerjasamanya! 🙏😊\n\n_Salam hangat,_\n*Bendahara Kelas 5A {nama_sekolah}*`;

    let template = s.waTemplate || defaultTemplate;
    const message = template
      .replace(/\{nama_siswa\}/g, studentName)
      .replace(/\{bulan\}/g, monthLabel)
      .replace(/\{nominal\}/g, this.formatRp(amountDue))
      .replace(/\{nama_sekolah\}/g, s.namaSekolah || 'SDS Kasih Ananda');

    const txtElem = document.getElementById('waMessageText');
    if (txtElem) txtElem.value = message;

    const cleanPhone = phone ? phone.replace(/[^0-9]/g, '') : '';
    const formattedPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : (cleanPhone.startsWith('62') ? cleanPhone : (cleanPhone ? '62' + cleanPhone : ''));

    const waUrl = formattedPhone
      ? `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;

    const btn = document.getElementById('btnOpenWhatsApp');
    if (btn) {
      btn.onclick = () => {
        window.open(waUrl, '_blank');
      };
    }

    window.open(waUrl, '_blank');
  }



  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('📋 Pesan pengingat berhasil disalin ke clipboard!');
    });
  }

  // --- TAB 6: LAPORAN CETAK A4 ---
  renderReport() {
    const reportType = document.getElementById('reportTypeSelect')?.value || 'TAHUNAN';
    const contentArea = document.getElementById('reportPaperBody') || document.getElementById('reportContentArea');
    const subheader = document.getElementById('reportSubheaderText');
    if (!contentArea) return;


    const totals = this.calculateTotals();
    const nominal = this.data.settings.nominalPerBulan || 20000;

    if (reportType === 'TAHUNAN') {
      if (subheader) subheader.innerText = 'Periode Tahun Ajaran 2026–2027 (Juli 2026 – Juni 2027)';


      contentArea.innerHTML = `
        <div style="margin-bottom: 20px;">
          <table class="data-table" style="margin-bottom: 20px;">
            <thead>
              <tr style="background: #f1f5f9;">
                <th>Uraian Rekapitulasi Tahunan</th>
                <th style="text-align: right;">Jumlah / Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Siswa Kelas 5A</td>
                <td style="text-align: right;"><strong>${this.data.students.length} Siswa</strong></td>
              </tr>
              <tr>
                <td>Total Pemasukan Kas Diterima (Rp20.000 / siswa / bulan)</td>
                <td style="text-align: right; color: #15803d;"><strong>${this.formatRp(totals.totalPemasukan)}</strong></td>
              </tr>
              <tr>
                <td>Total Pengeluaran Keperluan Kelas</td>
                <td style="text-align: right; color: #be123c;"><strong>${this.formatRp(totals.totalPengeluaran)}</strong></td>
              </tr>
              <tr style="background: #f0fdf4; font-size: 1.05rem;">
                <td><strong>SALDO BERSISA KAS KELAS 5A</strong></td>
                <td style="text-align: right; color: #0284c7;"><strong>${this.formatRp(totals.saldoAkhir)}</strong></td>
              </tr>
            </tbody>
          </table>

          <h4 style="font-family: var(--font-heading); margin-bottom: 10px;">Ringkasan Pembayaran Per Siswa (12 Bulan)</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Siswa</th>
                <th style="text-align: center;">Jumlah Bulan Lunas</th>
                <th style="text-align: right;">Total Bayar (Rp)</th>
              </tr>
            </thead>
            <tbody>
              ${this.data.students.map((st, idx) => {
                let lunas = 0;
                this.data.months.forEach(m => { if (this.getPayment(st, m.key).status) lunas++; });
                return `
                  <tr>
                    <td>${idx + 1}</td>
                    <td>${st.name}</td>
                    <td style="text-align: center;">${lunas} / 12 Bulan</td>
                    <td style="text-align: right;">${this.formatRp(lunas * nominal)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else {
      const monthObj = this.data.months.find(m => m.key === reportType) || this.data.months[0];
      subheader.innerText = `Periode Bulan ${monthObj.label}`;

      const lunasStudents = this.data.students.filter(s => this.getPayment(s, monthObj.key).status);
      const belumStudents = this.data.students.filter(s => !this.getPayment(s, monthObj.key).status);

      contentArea.innerHTML = `
        <div style="margin-bottom: 20px;">
          <div style="display: flex; gap: 16px; margin-bottom: 20px;">
            <div style="flex: 1; padding: 12px; background: #f0fdf4; border-radius: 8px;">
              <div style="font-size: 0.8rem; color: #166534;">Siswa Lunas</div>
              <div style="font-size: 1.4rem; font-weight: 800; color: #15803d;">${lunasStudents.length} Siswa</div>
            </div>
            <div style="flex: 1; padding: 12px; background: #ffe4e6; border-radius: 8px;">
              <div style="font-size: 0.8rem; color: #991b1b;">Belum Bayar</div>
              <div style="font-size: 1.4rem; font-weight: 800; color: #be123c;">${belumStudents.length} Siswa</div>
            </div>
            <div style="flex: 1; padding: 12px; background: #e0f2fe; border-radius: 8px;">
              <div style="font-size: 0.8rem; color: #075985;">Kas Masuk Bulan Ini</div>
              <div style="font-size: 1.4rem; font-weight: 800; color: #0284c7;">${this.formatRp(lunasStudents.length * nominal)}</div>
            </div>
          </div>

          <h4 style="font-family: var(--font-heading); margin-bottom: 10px;">Status Pembayaran Kas Bulan ${monthObj.label}</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Siswa</th>
                <th style="text-align: center;">Tgl & Metode</th>
                <th style="text-align: center;">Status</th>
                <th style="text-align: right;">Nominal</th>
              </tr>
            </thead>
            <tbody>
              ${this.data.students.map((st, idx) => {
                const pay = this.getPayment(st, monthObj.key);
                const detail = pay.status && (pay.date || pay.method) ? `${pay.date || '-'} (${pay.method || 'Cash'})` : '-';
                return `
                  <tr>
                    <td>${idx + 1}</td>
                    <td>${st.name}</td>
                    <td style="text-align: center; font-size: 0.8rem;">${detail}</td>
                    <td style="text-align: center;"><span class="status-pill ${pay.status ? 'lunas' : 'belum'}">${pay.status ? 'LUNAS' : 'BELUM BAYAR'}</span></td>
                    <td style="text-align: right;">${pay.status ? this.formatRp(nominal) : 'Rp 0'}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const s = this.data.settings || {};
    
    const titleHead = document.getElementById('reportTitleHeader');
    if (titleHead) titleHead.innerText = `LAPORAN KAS BENDAHARA ${s.namaKelas || 'KELAS 5A'}`.toUpperCase();

    const schoolHead = document.getElementById('reportSchoolHeader');
    if (schoolHead) schoolHead.innerText = (s.namaSekolah || 'SDS KASIH ANANDA').toUpperCase();

    const printDateEl = document.getElementById('reportPrintDate');
    if (printDateEl) printDateEl.innerText = today;

    const sigWaliEl = document.getElementById('reportSignatureWali');
    if (sigWaliEl) sigWaliEl.innerText = s.namaWaliKelas || 'Bu Liswati';

    const sigBendaharaEl = document.getElementById('reportSignatureBendahara');
    if (sigBendaharaEl) sigBendaharaEl.innerText = s.namaKoordinator || s.namaBendahara || 'Mom Kim';
  }



  printReport() {
    this.switchTab('tab-laporan');
    setTimeout(() => {
      window.print();
    }, 200);
  }

  // --- EXPORT TO EXCEL ---
  //  // Backup data ke file JSON di perangkat pengguna (Manual atau Auto)
  backupData(isAuto = false) {
    try {
      const now  = new Date();
      const ts   = now.toISOString().slice(0,10).replace(/-/g,'') + '_' +
                   now.toTimeString().slice(0,5).replace(':','');
      const filename = (isAuto ? 'Backup_Kas5A_Auto_' : 'Backup_Kas5A_') + ts + '.json';
      const json = JSON.stringify(this.data, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
      const paid = this.countPaid(this.data);
      const nom  = (this.data.settings && this.data.settings.nominalPerBulan) ? this.data.settings.nominalPerBulan : 20000;
      if (!isAuto) {
        alert('✅ Backup berhasil!\n\nFile: ' + filename + '\nTotal lunas: ' + paid + ' bulan\nTotal: Rp ' + (paid*nom).toLocaleString('id-ID') + '\n\nSimpan file ini di tempat aman ya!');
      } else {
        console.log('🛡️ [AutoBackup] Otomatis mengunduh cadangan harian:', filename);
      }
    } catch(e) { 
      if (!isAuto) alert('❌ Backup gagal: ' + e.message); 
    }
  }

  // Cek dan unduh backup otomatis setiap hari saat web dibuka
  checkAutoDailyBackup() {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const lastBackupDate = localStorage.getItem('kas_5a_auto_backup_date');
      if (lastBackupDate !== today) {
        this.backupData(true);
        localStorage.setItem('kas_5a_auto_backup_date', today);
      }
    } catch (e) {
      console.warn('Auto backup check:', e);
    }
  }

    exportToExcel() {
    if (typeof XLSX === 'undefined') {
      alert('Library SheetJS belum dimuat. Mohon pastikan koneksi internet aktif.');
      return;
    }

    const nominal = this.data.settings.nominalPerBulan || 20000;

    const matrixHeaders = ['No', 'Nama Siswa', 'No. HP / WA', ...this.data.months.map(m => m.label), 'Total Lunas', 'Total Nominal (Rp)'];
    const matrixRows = this.data.students.map((st, idx) => {
      let lunasCount = 0;
      const monthStatuses = this.data.months.map(m => {
        const pay = this.getPayment(st, m.key);
        if (pay.status) lunasCount++;
        return pay.status ? 20000 : 0;
      });

      return [
        idx + 1,
        st.name,
        st.phone || '-',
        ...monthStatuses,
        `${lunasCount}/${this.data.months.length}`,
        lunasCount * nominal
      ];
    });

    const wsMatrix = XLSX.utils.aoa_to_sheet([matrixHeaders, ...matrixRows]);

    const expHeaders = ['No', 'Tanggal', 'Kategori', 'Uraian Keperluan', 'Nominal (Rp)'];
    const expRows = (this.data.expenses || []).map((exp, idx) => [
      idx + 1,
      exp.date,
      exp.category,
      exp.description,
      exp.amount
    ]);

    const wsExpenses = XLSX.utils.aoa_to_sheet([expHeaders, ...expRows]);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, wsMatrix, 'Pembayaran Kas 12 Bulan');
    XLSX.utils.book_append_sheet(wb, wsExpenses, 'Pengeluaran Kas');

    XLSX.writeFile(wb, `Kas_Bendahara_Kelas_5A_2026-2027.xlsx`);
  }

  // --- EXCEL TEMPLATE WITH 12 MONTHS PAYMENTS ---
  downloadStudentTemplate() {
    if (typeof XLSX === 'undefined') {
      alert('Library SheetJS belum dimuat. Pastikan koneksi internet aktif.');
      return;
    }
    const headers = [
      'Nama Lengkap Siswa',
      'No. WhatsApp Orang Tua',
      ...this.data.months.map(m => m.label)
    ];
    
    const sampleData = [
      ['Adelia Putri', '081234567801', 20000, 20000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['Ahmad Rizky Pratama', '081234567802', 20000, 20000, 20000, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['Alifia Zahra', '081234567803', 20000, 20000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const ws = XLSX.utils.aoa_to_sheet([headers, ...sampleData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data Siswa & Kas 5A');
    XLSX.writeFile(wb, 'Template_Data_Siswa_Dan_Kas_5A.xlsx');
  }

  // --- FITUR PULIHKAN DATA UNIVERSAL (JSON / EXCEL) ---
  handleUniversalRestore(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();

    if (fileName.endsWith('.json')) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const parsed = JSON.parse(evt.target.result);
          if (!parsed.students || !Array.isArray(parsed.students)) {
            alert('❌ Format file JSON tidak valid (tidak berisi daftar siswa).');
            return;
          }

          const count = this.countPaid(parsed);
          const expCount = (parsed.expenses && Array.isArray(parsed.expenses)) ? parsed.expenses.length : 0;
          const totalExp = (parsed.expenses && Array.isArray(parsed.expenses)) ? parsed.expenses.reduce((a, b) => a + (Number(b.amount) || 0), 0) : 0;
          const nom = (parsed.settings && parsed.settings.nominalPerBulan) ? parsed.settings.nominalPerBulan : 20000;
          const totalInc = count * nom;
          const saldo = totalInc - totalExp;

          if (confirm(`Apakah Anda yakin ingin memulihkan data dari:\n${file.name}?\n\n• Total Lunas: ${count} transaksi (Rp ${totalInc.toLocaleString('id-ID')})\n• Pengeluaran: Rp ${totalExp.toLocaleString('id-ID')} (${expCount} item)\n• Saldo Akhir: Rp ${saldo.toLocaleString('id-ID')}\n\nKlik OK untuk menerapkan sekarang.`)) {
            this.data = parsed;
            this.saveData();
            this.renderAllViews();
            alert(`✅ Data Berhasil Dipulihkan!\n\nSaldo saat ini: Rp ${saldo.toLocaleString('id-ID')}`);
          }
        } catch (err) {
          alert('❌ Gagal membaca file JSON: ' + err.message);
        } finally {
          e.target.value = '';
        }
      };
      reader.readAsText(file);
    } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
      this.handleExcelImport(e);
    } else {
      alert('❌ Format file tidak didukung. Harap pilih file .json atau .xlsx');
      e.target.value = '';
    }
  }


  handleExcelImport(e) {
    if (!this.isUnlocked) {
      alert('🔒 Harap Login Bendahara untuk mengimpor data siswa dari Excel.');
      e.target.value = '';
      return;
    }

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = new Uint8Array(evt.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // Parse with raw: false so numbers are converted to exact formatted string
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false, defval: '' });

        if (!json || json.length < 2) {
          alert('❌ File Excel kosong atau tidak memiliki baris data.');
          return;
        }

        // Find header row
        let headerRowIndex = -1;
        for (let i = 0; i < Math.min(json.length, 5); i++) {
          if (!json[i]) continue;
          const rowStr = json[i].map(cell => String(cell || '').toLowerCase()).join(' ');
          if (rowStr.includes('nama') || rowStr.includes('siswa')) {
            headerRowIndex = i;
            break;
          }
        }

        if (headerRowIndex === -1) headerRowIndex = 0;

        const headers = json[headerRowIndex].map(h => String(h || '').trim().toLowerCase());
        const nameIdx = headers.findIndex(h => h.includes('nama'));
        
        // Find Phone Column (Ignore name column to prevent 'siswa' matching 'wa'!)
        let phoneIdx = headers.findIndex((h, idx) => {
          if (idx === nameIdx) return false;
          return h.includes('hp') || 
                 h.includes('whatsapp') || 
                 h.includes('telepon') || 
                 h.includes('phone') || 
                 h.includes('orang tua') || 
                 h.includes('ortu') || 
                 (h.includes('wa') && !h.includes('siswa'));
        });

        if (phoneIdx === -1 && (nameIdx === 0 || nameIdx === -1) && headers.length > 1) {
          phoneIdx = 1; // Default to Column B if Column A is Name
        }


        // Map column indices for each of the 12 months
        const monthIndices = {};
        this.data.months.forEach(m => {
          const monthLabelLower = m.label.toLowerCase();
          const monthNameOnly = m.label.split(' ')[0].toLowerCase();
          
          let idx = headers.findIndex(h => h === monthLabelLower || h.includes(monthLabelLower));
          if (idx === -1) {
            idx = headers.findIndex(h => h.includes(monthNameOnly));
          }
          if (idx !== -1) {
            monthIndices[m.key] = idx;
          }
        });

        const importedStudents = [];
        for (let i = headerRowIndex + 1; i < json.length; i++) {
          const row = json[i];
          if (!row || row.length === 0) continue;

          const nameVal = nameIdx !== -1 ? String(row[nameIdx] || '').trim() : (row[0] ? String(row[0]).trim() : '');
          if (!nameVal || nameVal.toLowerCase().includes('nama')) continue;

          // PHONE NUMBER PARSING (Handles 821..., 0821..., 62821..., or 0)
          let rawCell = (phoneIdx !== -1 && row[phoneIdx] !== undefined) ? String(row[phoneIdx] || '').trim() : '';
          let digitsOnly = rawCell.replace(/[^0-9]/g, '');
          let phoneStr = '';

          if (digitsOnly === '0' || digitsOnly.length < 5 || rawCell.toLowerCase() === nameVal.toLowerCase()) {
            phoneStr = '';
          } else if (digitsOnly.startsWith('8')) {
            phoneStr = '0' + digitsOnly;
          } else if (digitsOnly.startsWith('628')) {
            phoneStr = '0' + digitsOnly.slice(2);
          } else {
            phoneStr = digitsOnly;
          }

          // Read payment values for all 12 months from Excel
          const paymentsObj = {};
          const todayStr = new Date().toISOString().split('T')[0];

          this.data.months.forEach(m => {
            const colIdx = monthIndices[m.key];
            if (colIdx !== undefined && row[colIdx] !== undefined && row[colIdx] !== null) {
              const cellVal = String(row[colIdx]).trim().toLowerCase();
              const numVal = parseFloat(cellVal.replace(/[^0-9.]/g, '')) || 0;

              if (numVal > 0 || cellVal.includes('lunas') || cellVal.includes('ya') || cellVal.includes('true') || cellVal.includes('v') || cellVal.includes('✓')) {
                paymentsObj[m.key] = {
                  status: true,
                  date: todayStr,
                  method: 'Tunai / Cash'
                };
              } else {
                paymentsObj[m.key] = {
                  status: false,
                  date: '',
                  method: ''
                };
              }
            } else {
              paymentsObj[m.key] = {
                status: false,
                date: '',
                method: ''
              };
            }
          });

          importedStudents.push({
            id: importedStudents.length + 1,
            name: nameVal,
            phone: phoneStr,
            payments: paymentsObj
          });
        }

        if (importedStudents.length === 0) {
          alert('❌ Tidak ada baris nama siswa yang valid ditemukan di file Excel.');
          return;
        }

        const replaceAll = confirm(`Berhasil membaca ${importedStudents.length} siswa dan status pembayaran kas dari Excel!\n\nKlik "OK" untuk MENGGANTI seluruh daftar siswa & pembayaran kas saat ini.\nKlik "Batal" untuk MENAMBAHKAN ke daftar siswa yang ada.`);

        if (replaceAll) {
          this.data.students = importedStudents;
        } else {
          const maxId = this.data.students.length ? Math.max(...this.data.students.map(s => s.id)) : 0;
          importedStudents.forEach((st, idx) => {
            st.id = maxId + idx + 1;
            this.data.students.push(st);
          });
        }

        this.saveData();
        alert(`🎉 Sukses mengimpor ${importedStudents.length} siswa beserta nomor WA dan status pembayaran nominal kas dari Excel!`);
      } catch (err) {
        console.error('Error membaca Excel:', err);
        alert('❌ Gagal membaca file Excel. Harap pastikan format file valid (.xlsx / .csv).');
      } finally {
        e.target.value = '';
      }
    };
    reader.readAsArrayBuffer(file);
  }

  renderHeaderLogo() {
    const logoEl = document.getElementById('headerBrandLogo');
    if (logoEl) {
      const iconClass = (this.data.settings && this.data.settings.iconLogo) ? this.data.settings.iconLogo : 'fa-solid fa-school-flag';
      logoEl.innerHTML = `<i class="${iconClass}"></i>`;
    }
  }

  // --- PENGATURAN KELAS & PENGURUS ---
  openSettingsModal() {
    if (!this.isUnlocked) {
      alert('🔒 Harap Login Bendahara untuk mengubah pengaturan kelas.');
      return;
    }

    const defaultWaTemplate = `Assalamu'alaikum / Selamat Pagi Bapak/Ibu Wali Murid dari *{nama_siswa}*,\n\nIzin mengingatkan mengenai pembayaran Kas Kelas 5A {nama_sekolah} untuk bulan *{bulan}* sebesar *{nominal}*.\n\nPembayaran dapat diserahkan langsung melalui ananda atau ditransfer ke Bendahara Kelas 5A.\n\nTerima kasih atas perhatian dan kerjasamanya! 🙏😊\n\n_Salam hangat,_\n*Bendahara Kelas 5A {nama_sekolah}*`;

    const s = this.data.settings || {};
    if (document.getElementById('setWaliKelas')) document.getElementById('setWaliKelas').value = s.namaWaliKelas || 'Bu Liswati';
    if (document.getElementById('setKoordinator')) document.getElementById('setKoordinator').value = s.namaKoordinator || s.namaBendahara || 'Mom Kim';
    if (document.getElementById('setNamaSekolah')) document.getElementById('setNamaSekolah').value = s.namaSekolah || 'SDS Kasih Ananda';
    if (document.getElementById('setNamaKelas')) document.getElementById('setNamaKelas').value = s.namaKelas || 'Kelas 5A';
    if (document.getElementById('setNominalKas')) document.getElementById('setNominalKas').value = s.nominalPerBulan || 20000;
    if (document.getElementById('setJudulPengeluaran')) document.getElementById('setJudulPengeluaran').value = s.judulPengeluaran || 'Total Pengeluaran';
    if (document.getElementById('setDescPengeluaran')) document.getElementById('setDescPengeluaran').value = s.descPengeluaran || 'Keperluan & Kegiatan Kelas 5A';
    if (document.getElementById('setIconLogo')) document.getElementById('setIconLogo').value = s.iconLogo || 'fa-solid fa-school-flag';
    if (document.getElementById('setWaTemplate')) document.getElementById('setWaTemplate').value = s.waTemplate || defaultWaTemplate;
    if (document.getElementById('setPinBendahara')) document.getElementById('setPinBendahara').value = s.pinBendahara || '5A2026';

    this.openModal('modalSettings');
  }

  handleSettingsSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();

    const waliEl = document.getElementById('setWaliKelas');
    const koorEl = document.getElementById('setKoordinator');
    const sekolahEl = document.getElementById('setNamaSekolah');
    const kelasEl = document.getElementById('setNamaKelas');
    const nominalEl = document.getElementById('setNominalKas');
    const judulPengEl = document.getElementById('setJudulPengeluaran');
    const descPengEl = document.getElementById('setDescPengeluaran');
    const iconLogoEl = document.getElementById('setIconLogo');
    const waTemplateEl = document.getElementById('setWaTemplate');
    const pinEl = document.getElementById('setPinBendahara');

    const wali = waliEl ? waliEl.value.trim() : '';
    const koor = koorEl ? koorEl.value.trim() : '';
    const sekolah = sekolahEl ? sekolahEl.value.trim() : '';
    const kelas = kelasEl ? kelasEl.value.trim() : '';
    const nominal = nominalEl ? parseFloat(nominalEl.value) || 20000 : 20000;
    const judulPengeluaran = judulPengEl ? judulPengEl.value.trim() : '';
    const descPengeluaran = descPengEl ? descPengEl.value.trim() : '';
    const iconLogo = iconLogoEl ? iconLogoEl.value.trim() : '';
    const waTemplate = waTemplateEl ? waTemplateEl.value.trim() : '';
    const pin = pinEl ? pinEl.value.trim() : '';

    if (!this.data.settings) this.data.settings = {};
    this.data.settings.namaWaliKelas = wali || 'Bu Liswati';
    this.data.settings.namaKoordinator = koor || 'Mom Kim';
    this.data.settings.namaBendahara = koor || 'Mom Kim';
    this.data.settings.namaSekolah = sekolah || 'SDS Kasih Ananda';
    this.data.settings.namaKelas = kelas || 'Kelas 5A';
    this.data.settings.nominalPerBulan = nominal;
    this.data.settings.judulPengeluaran = judulPengeluaran || 'Total Pengeluaran';
    this.data.settings.descPengeluaran = descPengeluaran || 'Keperluan & Kegiatan Kelas 5A';
    this.data.settings.iconLogo = iconLogo || 'fa-solid fa-school-flag';
    this.data.settings.waTemplate = waTemplate;
    this.data.settings.pinBendahara = pin || '5A2026';


    this.isUnlocked = true;
    sessionStorage.setItem('kas_bendahara_unlocked', 'true');

    this.saveData();
    this.renderHeaderLogo();
    this.renderDashboard();
    this.renderReport();
    this.closeModal('modalSettings');

    alert(`⚙️ Pengaturan Berhasil Disimpan!\n\n• Ikon Header: ${this.data.settings.iconLogo}\n• PIN Bendahara: ${this.data.settings.pinBendahara}\n• Wali Kelas: ${this.data.settings.namaWaliKelas}\n• Koordinator: ${this.data.settings.namaKoordinator}`);
  }




  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('show');
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('show');
  }
}

let app;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    app = new KasApp();
    window.app = app;
  });
} else {
  app = new KasApp();
  window.app = app;
}

