export default {
  "1": {
    "question": "Do you believe there is something to discover in your personal or professional life?",
    "answers": [
      {
        "text": "Personal",
        "goto": "2"
      },
      {
        "text": "Professional",
        "goto": "18"
      },
      {
        "text": "Both",
        "goto": "2"
      }
    ]
  },

  "2": {
    "question": "Are you experiencing pain or trauma?",
    "answers": [
      {
        "text": "Yes",
        "goto": "3"
      },
      {
        "text": "No",
        "goto": "7"
      }
    ]
  },

  "3": {
    "question": "Are you seeking a way to resolve past pain, dysfunction, or conflict?",
    "answers": [
      {
        "text": "Yes",
        "goto": "4"
      },
      {
        "text": "No",
        "goto": "5"
      }
    ]
  },

  "4": {
    "end": {
      "title": "Consider psychotherapy",
      "text": `The focus is often on resolving difficulties arising from the past that hamper an 
      individual's emotional functioning in the present, improving overall psychological functioning,
      and dealing with the present in more emotionally healthy ways.  You may find it helpful to know
      that ICF Members have received training to discern the differences between coaching and therapy 
      and are obliged by our organization's Code of Ethics to refer prospective or current clients to 
      therapists when appropriate.`
    }
  },

  "5": {
    "question": "Do you seek action, accountability, and follow-through?",
    "answers": [
      {
        "text": "Yes",
        "goto": "7"
      },
      {
        "text": "No",
        "goto": "6"
      }
    ]
  },

  "6": {
    "end": {
      "title": "Consider coaching in the future",
      "text": "Coaching might be the right fit for you in the future. To decide when the time is right, ask yourself the following questions:\n\n * What do I want to accomplish?\n * Do I value collaboration, other viewpoints and new perspectives?\n * Am I ready to devote time and energy to making real changes?"
    }
  },

  "7": {
    "question": "Would you like to increase self-confidence and enhance relationships, communication skills, and work/life balance?",
    "answers": [
      {
        "text": "Yes",
        "goto": "8"
      },
      {
        "text": "No",
        "goto": "6"
      }
    ]
  },

  "8": {
    "question": "Do you want lasting results to help you be a better person or leader?",
    "answers": [
      {
        "text": "Yes",
        "goto": "10"
      },
      {
        "text": "No",
        "goto": "9"
      }
    ]
  },

  "9": {
    "end": {
      "title": "Looks like you're all set.",
      "text": `Based on your answers, you don't need any help right now.
      
If you'd like to answer the questions again, "Start over" below.`
    }
  },

  "10": {
    "question": "Do you want to design actions or solutions for yourself, or do you need someone else to create them for you?",
    "answers": [
      {
        "text": "My design",
        "goto": "15"
      },
      {
        "text": "Someone else's design",
        "goto": "11"
      }
    ]
  },

  "11": {
    "question": "Are you seeking someone to evaluate your situation and provide advice or feedback, based on their experience or expertise?",
    "answers": [
      {
        "text": "Yes",
        "goto": "12"
      },
      {
        "text": "No",
        "goto": "6"
      }
    ]
  },

  "12": {
    "question": "Are you looking for wisdom and guidance or an expert to identify, prescribe, and potentially implement solutions?",
    "answers": [
      {
        "text": "Wisdom and guidance",
        "goto": "13"
      },
      {
        "text": "Prescribe and implement",
        "goto": "14"
      }
    ]
  },

  "13": {
    "end": {
      "title": "Consider mentoring",
      "text": "A mentor is an expert who provides wisdom and guidance based on his or her own experience. Mentoring may include advising, counseling and coaching."
    }
  },

  "14": {
    "end": {
      "title": "Consider consulting",
      "text": "Individuals or organizations retain consultants for their expertise. While consulting approaches vary widely, the assumption is the consultant will diagnose problems and prescribe and, sometimes, implement solutions."
    }
  },

  "15": {
    "question": "Are you seeking a professional who can work with you to clarify your desires and design actions that will move you toward your goals?",
    "answers": [
      {
        "text": "Yes",
        "goto": "16"
      },
      {
        "text": "No",
        "goto": "6"
      }
    ]
  },

  "16": {
    "question": "Are you willing to devote time and energy to making changes?",
    "answers": [
      {
        "text": "Yes",
        "goto": "17"
      },
      {
        "text": "No",
        "goto": "6"
      }
    ]
  },

  "17": {
    "end": {
      "title": "Consider coaching",
      "text": `A coach could be beneficial for you! ICF defines coaching as partnering with clients in a 
thought-provoking and creative process that inspires them to maximize their personal and professional 
potential. Coaches honor the client as the expert in his or her life and work and believe every client 
is creative and resourceful. The coach's responsibility is to:

* Discover, clarify and align with what the client wants to achieve.  
* Encourage client self-discovery.  
* Elicit client-generated solutions and strategies.  
* Hold the client responsible and accountable.

This process helps clients dramatically improve their outlook on work and life, while developing 
leadership skills and unlocking potential.`,
      "actions": [
        { "text": "Book a free session!", "goto": "https://aaronbieber.coach/get-started" }
      ]
    }
  },

  "18": {
    "question": "Do you want a flexible, customizable learning solution or will a set curriculum help you achieve your goals?",
    "answers": [
      {
        "text": "Customized learning solution",
        "goto": "20"
      },
      {
        "text": "Set curriculum",
        "goto": "19"
      }
    ]
  },

  "19": {
    "end": {
      "title": "Consider training",
      "text": "Training programs are based on objectives set out by the trainer or instructor. Training also assumes a linear learning path that coincides with an established curriculum."
    }
  },

  "20": {
    "question": "Are you looking for increased productivity, time management, team effectiveness, and work performance?",
    "answers": [
      {
        "text": "Yes",
        "goto": "8"
      },
      {
        "text": "No",
        "goto": "7"
      }
    ]
  }
}
