# Headless CMS란 무엇인가?

**Headless CMS**라는 용어를 프로젝트에서 **[Sanity](https://www.sanity.io/)**를 사용하기전까지는 한번도 들어보지 못했다. 그래서 CMS에대해 가볍게 설명하고 Headless CMS를 알아보자.

**CMS**는 Content Management System의 약자로 **콘텐츠를 관리해주는 시스템을 말한다.** 여기서 콘텐츠란 우리가 개발을하면서 다루는 다양한 데이터라고 말할수있다. 데이터를 어디에 저장하고 어떻게 그 데이터를 보여줄것인지를 모두 담당하고있다. 대표적인 예시로 WordPress가 있다. CMS는 여기까지 알아보고 본 주제인 Headless CMS를 알아보자. 

Headless CMS를 직역해보자면 머리가 없는 콘텐츠 관리 시스템이다. 웹 개발을 사람으로 비유하자면 Body를 Back-end에 비유하고 Head를 Front-end에 비유한다. 즉 **Headless CMS는 Front-end가 없는 CMS**이다. 데이터를 저장하는 Body는 있지만 그 데이터를 보여주는 Front-end가 없는것이다. 데이터 저장소는 그대로 두고 머리(Front-end)만 변경하면 데이터를 다양한 형태로 보여줄수있는것이다.

더 정확하게 말하자면, **Headless CMS는 데이터를 어디에 저장할지와 어떻게 보여줄지를 명확하게 분리**하여 데이터를 보여주기위해 제공하는 API만 적절하게 사용하면 다양한 형태로 보여줄수있는것이다. 대표적인 예로 [**Sanity**](https://www.sanity.io/)가 있다.

Headless CMS가 사용하는 이유는 **유연한 서비스를 제공**할수있기때문이다. 기존 CMS는 하나의 서비스와 하나의 콘텐츠가 얽혀 확장성에 제한이 있었다. 반면 Headless CMS는 API만 적절하게 사용하면 다양한 형태로 보여줄수있어. 확장성이 뛰어나다.

Headless CMS를 SNS 프로젝트에서 다양한 데이터를 저장하기위해 사용해보았는데, 데이터를 잘 저장만 해두면 이것을 또 다른 프로젝트에서 활용할수있다는 생각이들었다.