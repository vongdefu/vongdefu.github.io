# 1. 开发阶段如何进行任务分配？

## 1.1. 如何进行任务划分？

这个问题本质上就是在询问如何进行项目管理的。

首先，明确任务划分的场景，即什么时候需要我们做任务划分。所谓任务划分就是在开发团队中具有领导职权的人员对任务进行细化的过程，完成任务划分后还需要根据人员素养，把细化的工作任务分配给团队成员。这个一般情况下是在团队小组长或项目经理或产品经理接到开发需求后做的工作。

其次，任务划分需要注意哪些内容。需要注意的是任务的时间周期，即给多少开发时间；任务的难易程度，即有多少工作量；团队的人员素养，即开发人员的技术水平。主要是这几方面。

最后是具体的做法：

## 1.2. 需求澄清阶段

首先拿到任务之后，团队组长会先对任务做一个评估，在这个过程中可能需要跟业务团队人员进行多次沟通和确认。在此同时，可以让把文档跟开发同事进行分享，让所有开发同事了解整个任务的进展情况，如果有空闲时间，还要要求开发同事对任务进行评估。最后在团队组长对任务内容进行确定后，再拉上开发同事和其他需求相关人员（如测试人员、需求人员等）一起开一个需求澄清会议，在这个会议上要求所有开发同事熟悉大概的开发实现流程，例如：和哪些关联系统进行交互，本系统中需要处理哪些逻辑，落库数据是哪些，特别关注点是什么等。总之，这个过程的阶段性目标是团队组长对开发任务有一个深入的了解，同时开发同事也需要了解大概的开发流程。阶段性的产物就是需求说明文档，文档中的内容要细致准确，不能有二义性。

## 1.3. 任务细化阶段

之后是任务的细化，需求文档产生之后，团队组长还需要对任务做进一步的细化，即划分为几个模块，每个模块的边界是怎么样的。系统架构不一样，采用的划分标准也不一样，如前后端不分离的系统架构，可以以菜单作为边界进行划分，前后端分离的系统架构，可以以接口作为边界进行划分，这也是常用的两种划分方式。

## 1.4. 任务分配

任务划分完成之后是任务的分配，任务的分配主要是要考虑开发人员的综合素养。如果团队成员都是实习生，没有过多的经验，那么这时需要采用指定的方式进行分配，即根据不同人员的不同能力，采取能力大的承担复杂一些的功能模块，能力小的人员采用能力小一些的功能模块。如果团队成员都是经验丰富的老手，那么可以采用开发人员认领的方式，即把任务划分内容分发给开发人员，让开发人员自己认领自己该完成的内容。

## 1.5. 工期统计

任务分配完成之后就是工期的统计，即让开发人员给出完成任务的截止时间。这个根据任务分配方式的不同采用不同的方式进行统计。如果团队内都是实习生，团队组长可以按照自己的工作经验及成员的个人的能力进行评估，比如分配给某个实习生的工作内容是比较复杂的工作内容，但是团队组长觉得如果这个工作内容自己完成的话，可以用两天的时间，并且这个实习生的学习能力比较强，那么给这个开发人员的时间可以是三天；如果团队内都是一些老手，那么团队组长需要自己给出一个时间，然后让每一个开发同事同事也给出一个时间，这种情况下，两个开发时间应该不会有太大差距，可能就是一个给出两天开发时间，一个给出四天开发时间，那么就可以采用折中的方式给出三天的开发时间，如果两个开发时间相差很大，那么就需要同步团队组长和开发人员对任务的具体理解及看法，团队组长需要询问为什么需要的时间比自己评估的时间要长，如果开发同事说某个功能模块需要时间会久一些，团队组长要么给出具体的解决方案，要么就同意开发同事的时间统计，要么就是换一个能力强的开发同事来承担这个任务，要么就是让一个能力强的开发同事帮助这个开发同事一同完成这个任务。

## 1.6. 任务追踪

上面内容完成之后，就是每天要统计任务完成情况。可以采用每天定时站立会的形式，这种方式其实是最高效的，具体做法就是在每天的站立会上每个团队成员要讲一下昨天的开发进度，遇到什么问题等。团队组长对情况进行摸底统计后，再安排今天的具体工作内容，然后就是协调资源，对开发成员遇到的问题进行解决。

## 1.7. 总结

经过上面这些具体的做法，基本上就完成了项目管理的所有内容，其实团队组长的最主要的职责不是把所有的任务都自己去完成，而是指导团队成员协调工作，团队组长的目标也很简单，就是分析潜在问题，并解决这些潜在问题。

此外，项目管理中还涉及到另外一个话题：如何管理代码质量？这个话题也很大，需要另开一篇文章进行讲解了。

### 1.7.1. 理想的团队人员配比是怎样的？

这个问题其实是在问一个理想团队中需要有多少个初级开发、多少个中级开发、多少个高级开发。这个问题一般情况下要问下到底是什么业务团队以及是怎样的团队架构，
