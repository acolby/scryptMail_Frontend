
# Crowdzer

## Data Structure

### /root

    {
        users: <refTo: /root/users>
        profiles: <refTo: /root/profiles>
        questions: <refTo: /root/questions>
        ideas: <refTo: /root/ideas>
        comments: <refTo: /root/comments>
        tags: <refTo: /root/tags>
    }
    
### /root/users

    {
        <userId>: {
            public: {
                id: <userId>,
                displayName: <string>,
                imageUrl: <string>
            },
            private: {
                email: <string>,
                provider: <string>
            }
        }
    }
    
### /root/profiles

    {
        <userId>: {
            id: <userId>,
            ids_questionsViewed: {<questionId>: <dataTime>},
            ids_ideasPosted: {<ideaId>: <dataTime>},
            ids_commentsPosted: {<commentId>: <dataTime>},
            ids_questionsPosed: {<questionId>: <dataTime>}
        }
    }
    
### /root/questions

    {
        <questionId>: {
            id: <questionId>,
            edits: [
                {
                    date: <dateTime>,
                    text: <string>
                }
            ],
            id_author: <userId>,
            ids_ideas: {<ideaId>: <dataTime>},
            ids_comments: {<commentId>: <dataTime>},
            ids_viewdBy: {<userId>: <dataTime>},
            ids_likedBy: {<userId>: <dataTime>},
            ids_ratedBy: {<userId>: <int>},
            ids_votedBy: {<userId>: <int>},
            ids_tags: {<tagId>: <dataTime>},
        }
    }
    
### /root/ideas

    {
        <ideaId>: {
            id: <ideaId>,
            edits: [
                {
                    date: <dateTime>,
                    text: <string>
                }
            ],
            to: <string>,  // local reference
            id_author: <userId>,
            ids_comments: {<commentId>: <dataTime>},
            ids_likedBy: {<userId>: <dataTime>},
        }
    }
            
### /root/comments

    {
        <commentId>: {
            id: <ideaId>,
            edits: [
                {
                    date: <dateTime>,
                    text: <string>
                }
            ],
            to: <string>,  // local reference
            id_author: <userId>,
            ids_comments: {<commentId>: <dataTime>},
            ids_likedBy: {<userId>: <dataTime>},
        }
    }
          