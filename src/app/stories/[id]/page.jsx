import React from 'react';

const StoryDetailsPage = async({params}) => {
    const result=await params;
    console.log(result)
    return (
        <div>
            story
        </div>
    );
};

export default StoryDetailsPage;