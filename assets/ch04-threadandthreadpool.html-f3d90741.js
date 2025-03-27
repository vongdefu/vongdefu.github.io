import{_ as e,W as p,X as o,Y as n,Z as l,$ as t,a0 as s,C as r}from"./framework-16b96b76.js";const c="/assets/1700127016519-40ba8de0.png",i="/assets/1712505273400-14c422d0.png",u="/assets/1701349640431-d33fee05.png",d="/assets/1701350337023-0629cc82.png",v="/assets/1701350532636-1b56c28e.png",k="/assets/1701350600893-e3a73c8c.png",m="/assets/1701351163555-c7d6a2f7.png",b="/assets/1699920519563-47b0af44.png",L="/assets/1699920524572-a4400a14.png",g="/assets/1699920529256-deeca5fd.png",E={},A=s(`<h1 id="_4-线程及线程池" tabindex="-1"><a class="header-anchor" href="#_4-线程及线程池" aria-hidden="true">#</a> 4. 线程及线程池</h1><blockquote><ol><li>线程与进程</li><li>Java 中创建线程的方法</li><li>线程的状态转换【或生命周期】，Object 中的方法、Condition 类中的方法、LockSupport 的方法</li><li>池化技术理论基础</li><li>Java 中的两种创建线程池的方法、线程池原理、线程池实践经验</li><li>Spring 框架中使用线程池</li></ol></blockquote><blockquote><p>线程的创建方式 线程源码介绍 线程的生命周期及状态转化 线程的调度 线程间的互斥、同步、协作</p></blockquote><ol><li>进程与线程；</li><li>Java 中线程的创建与使用；</li><li>线程的 API；</li><li>线程的状态转化；</li></ol><details class="hint-container details"><summary>Thread 类的字节码</summary><div class="language-log line-numbers-mode" data-ext="log"><pre class="language-log"><code>

<span class="token operator">/</span><span class="token operator">/</span> class version <span class="token number">52.0</span> <span class="token operator">(</span><span class="token number">52</span><span class="token operator">)</span>
<span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x21</span>
public class java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread implements java<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable <span class="token operator">{</span>

  <span class="token operator">/</span><span class="token operator">/</span> compiled from<span class="token operator">:</span> Thread<span class="token punctuation">.</span>java
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x8</span>
  static INNERCLASS java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span><span class="token number">1</span> <span class="token boolean">null</span> <span class="token boolean">null</span>
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0xA</span>
  private static INNERCLASS java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>Caches java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread Caches
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x4019</span>
  public final static enum INNERCLASS java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>State java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread State
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x609</span>
  public static abstract INNERCLASS java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread UncaughtExceptionHandler
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x8</span>
  static INNERCLASS java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>WeakClassKey java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread WeakClassKey
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x8</span>
  static INNERCLASS java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal ThreadLocalMap

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x42</span>
  private volatile Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span> name

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private I priority

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span> threadQ

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private J eetop

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private Z single_step

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private Z daemon

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private Z stillborn

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span> target

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span> group

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span> contextClassLoader

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private Ljava<span class="token operator">/</span>security<span class="token operator">/</span>AccessControlContext<span class="token operator">;</span> inheritedAccessControlContext

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0xA</span>
  private static I threadInitNumber

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x0</span>
  Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span> threadLocals

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x0</span>
  Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span> inheritableThreadLocals

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private J stackSize

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private J nativeParkEventPointer

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private J tid

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0xA</span>
  private static J threadSeqNumber

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x42</span>
  private volatile I threadStatus

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x40</span>
  volatile Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span> parkBlocker

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x42</span>
  private volatile Lsun<span class="token operator">/</span>nio<span class="token operator">/</span>ch<span class="token operator">/</span>Interruptible<span class="token operator">;</span> blocker

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x12</span>
  private final Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span> blockerLock

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x19</span>
  public final static I MIN_PRIORITY <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x19</span>
  public final static I NORM_PRIORITY <span class="token operator">=</span> <span class="token number">5</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x19</span>
  public final static I MAX_PRIORITY <span class="token operator">=</span> <span class="token number">10</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1A</span>
  private final static <span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span> EMPTY_STACK_TRACE

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1A</span>
  private final static Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission<span class="token operator">;</span> SUBCLASS_IMPLEMENTATION_PERMISSION

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x42</span>
  private volatile Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span> uncaughtExceptionHandler

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x4A</span>
  private static volatile Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span> defaultUncaughtExceptionHandler

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x0</span>
  J threadLocalRandomSeed
  <span class="token operator">@</span>Lsun<span class="token operator">/</span>misc<span class="token operator">/</span>Contended<span class="token operator">;</span><span class="token operator">(</span>value<span class="token operator">=</span><span class="token string">&quot;tlr&quot;</span><span class="token operator">)</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x0</span>
  I threadLocalRandomProbe
  <span class="token operator">@</span>Lsun<span class="token operator">/</span>misc<span class="token operator">/</span>Contended<span class="token operator">;</span><span class="token operator">(</span>value<span class="token operator">=</span><span class="token string">&quot;tlr&quot;</span><span class="token operator">)</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x0</span>
  I threadLocalRandomSecondarySeed
  <span class="token operator">@</span>Lsun<span class="token operator">/</span>misc<span class="token operator">/</span>Contended<span class="token operator">;</span><span class="token operator">(</span>value<span class="token operator">=</span><span class="token string">&quot;tlr&quot;</span><span class="token operator">)</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x10A</span>
  private static native registerNatives<span class="token operator">(</span><span class="token operator">)</span>V

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2A</span>
  private static synchronized nextThreadNum<span class="token operator">(</span><span class="token operator">)</span>I
   L0
    LINENUMBER <span class="token number">177</span> L0
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadInitNumber <span class="token operator">:</span> I
    DUP
    ICONST_1
    IADD
    PUTSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadInitNumber <span class="token operator">:</span> I
    IRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">3</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2A</span>
  private static synchronized nextThreadID<span class="token operator">(</span><span class="token operator">)</span>J
   L0
    LINENUMBER <span class="token number">218</span> L0
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadSeqNumber <span class="token operator">:</span> J
    LCONST_1
    LADD
    DUP2
    PUTSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadSeqNumber <span class="token operator">:</span> J
    LRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">4</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x0</span>
  blockedOn<span class="token operator">(</span>Lsun<span class="token operator">/</span>nio<span class="token operator">/</span>ch<span class="token operator">/</span>Interruptible<span class="token operator">;</span><span class="token operator">)</span>V
    TRYCATCHBLOCK L0 L1 L2 <span class="token boolean">null</span>
    TRYCATCHBLOCK L2 L3 L2 <span class="token boolean">null</span>
   L4
    LINENUMBER <span class="token number">239</span> L4
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
    DUP
    ASTORE <span class="token number">2</span>
    MONITORENTER
   L0
    LINENUMBER <span class="token number">240</span> L0
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blocker <span class="token operator">:</span> Lsun<span class="token operator">/</span>nio<span class="token operator">/</span>ch<span class="token operator">/</span>Interruptible<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">241</span> L5
    ALOAD <span class="token number">2</span>
    MONITOREXIT
   L1
    GOTO L6
   L2
   FRAME FULL <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread sun<span class="token operator">/</span>nio<span class="token operator">/</span>ch<span class="token operator">/</span>Interruptible java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">]</span> <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable<span class="token punctuation">]</span>
    ASTORE <span class="token number">3</span>
    ALOAD <span class="token number">2</span>
    MONITOREXIT
   L3
    ALOAD <span class="token number">3</span>
    ATHROW
   L6
    LINENUMBER <span class="token number">242</span> L6
   FRAME CHOP <span class="token number">1</span>
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">4</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x109</span>
  public static native currentThread<span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x109</span>
  public static native yield<span class="token operator">(</span><span class="token operator">)</span>V

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x109</span>
  public static native sleep<span class="token operator">(</span>J<span class="token operator">)</span>V throws java<span class="token operator">/</span>lang<span class="token operator">/</span>InterruptedException 

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x9</span>
  public static sleep<span class="token operator">(</span>JI<span class="token operator">)</span>V throws java<span class="token operator">/</span>lang<span class="token operator">/</span>InterruptedException 
   L0
    LINENUMBER <span class="token number">327</span> L0
    LLOAD <span class="token number">0</span>
    LCONST_0
    LCMP
    IFGE L1
   L2
    LINENUMBER <span class="token number">328</span> L2
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException
    DUP
    LDC <span class="token string">&quot;timeout value is negative&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    ATHROW
   L1
    LINENUMBER <span class="token number">331</span> L1
   FRAME SAME
    ILOAD <span class="token number">2</span>
    IFLT L3
    ILOAD <span class="token number">2</span>
    LDC <span class="token number">999999</span>
    IF_ICMPLE L4
   L3
    LINENUMBER <span class="token number">332</span> L3
   FRAME SAME
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException
    DUP
    LDC <span class="token string">&quot;nanosecond timeout value out of range&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    ATHROW
   L4
    LINENUMBER <span class="token number">336</span> L4
   FRAME SAME
    ILOAD <span class="token number">2</span>
    LDC <span class="token number">500000</span>
    IF_ICMPGE L5
    ILOAD <span class="token number">2</span>
    IFEQ L6
    LLOAD <span class="token number">0</span>
    LCONST_0
    LCMP
    IFNE L6
   L5
    LINENUMBER <span class="token number">337</span> L5
   FRAME SAME
    LLOAD <span class="token number">0</span>
    LCONST_1
    LADD
    LSTORE <span class="token number">0</span>
   L6
    LINENUMBER <span class="token number">340</span> L6
   FRAME SAME
    LLOAD <span class="token number">0</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>sleep <span class="token operator">(</span>J<span class="token operator">)</span>V
   L7
    LINENUMBER <span class="token number">341</span> L7
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">4</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">3</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private init<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>J<span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">349</span> L0
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    ALOAD <span class="token number">2</span>
    ALOAD <span class="token number">3</span>
    LLOAD <span class="token number">4</span>
    ACONST_NULL
    ICONST_1
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>init <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>JLjava<span class="token operator">/</span>security<span class="token operator">/</span>AccessControlContext<span class="token operator">;</span>Z<span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">350</span> L1
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">8</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">6</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private init<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>JLjava<span class="token operator">/</span>security<span class="token operator">/</span>AccessControlContext<span class="token operator">;</span>Z<span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">368</span> L0
    ALOAD <span class="token number">3</span>
    IFNONNULL L1
   L2
    LINENUMBER <span class="token number">369</span> L2
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>NullPointerException
    DUP
    LDC <span class="token string">&quot;name cannot be null&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>NullPointerException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    ATHROW
   L1
    LINENUMBER <span class="token number">372</span> L1
   FRAME SAME
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">3</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>name <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
   L3
    LINENUMBER <span class="token number">374</span> L3
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>currentThread <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>
    ASTORE <span class="token number">8</span>
   L4
    LINENUMBER <span class="token number">375</span> L4
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>System<span class="token punctuation">.</span>getSecurityManager <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token operator">;</span>
    ASTORE <span class="token number">9</span>
   L5
    LINENUMBER <span class="token number">376</span> L5
    ALOAD <span class="token number">1</span>
    IFNONNULL L6
   L7
    LINENUMBER <span class="token number">381</span> L7
    ALOAD <span class="token number">9</span>
    IFNULL L8
   L9
    LINENUMBER <span class="token number">382</span> L9
    ALOAD <span class="token number">9</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">.</span>getThreadGroup <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    ASTORE <span class="token number">1</span>
   L8
    LINENUMBER <span class="token number">387</span> L8
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">]</span>
    ALOAD <span class="token number">1</span>
    IFNONNULL L6
   L10
    LINENUMBER <span class="token number">388</span> L10
    ALOAD <span class="token number">8</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getThreadGroup <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    ASTORE <span class="token number">1</span>
   L6
    LINENUMBER <span class="token number">394</span> L6
   FRAME SAME
    ALOAD <span class="token number">1</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>checkAccess <span class="token operator">(</span><span class="token operator">)</span>V
   L11
    LINENUMBER <span class="token number">399</span> L11
    ALOAD <span class="token number">9</span>
    IFNULL L12
   L13
    LINENUMBER <span class="token number">400</span> L13
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span>getClass <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>isCCLOverridden <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span><span class="token operator">)</span>Z
    IFEQ L12
   L14
    LINENUMBER <span class="token number">401</span> L14
    ALOAD <span class="token number">9</span>
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>SUBCLASS_IMPLEMENTATION_PERMISSION <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">.</span>checkPermission <span class="token operator">(</span>Ljava<span class="token operator">/</span>security<span class="token operator">/</span>Permission<span class="token operator">;</span><span class="token operator">)</span>V
   L12
    LINENUMBER <span class="token number">405</span> L12
   FRAME SAME
    ALOAD <span class="token number">1</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>addUnstarted <span class="token operator">(</span><span class="token operator">)</span>V
   L15
    LINENUMBER <span class="token number">407</span> L15
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>group <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
   L16
    LINENUMBER <span class="token number">408</span> L16
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">8</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>isDaemon <span class="token operator">(</span><span class="token operator">)</span>Z
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L17
    LINENUMBER <span class="token number">409</span> L17
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">8</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getPriority <span class="token operator">(</span><span class="token operator">)</span>I
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>priority <span class="token operator">:</span> I
   L18
    LINENUMBER <span class="token number">410</span> L18
    ALOAD <span class="token number">9</span>
    IFNULL L19
    ALOAD <span class="token number">8</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span>getClass <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>isCCLOverridden <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span><span class="token operator">)</span>Z
    IFEQ L20
   L19
    LINENUMBER <span class="token number">411</span> L19
   FRAME SAME
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">8</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getContextClassLoader <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>contextClassLoader <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span>
    GOTO L21
   L20
    LINENUMBER <span class="token number">413</span> L20
   FRAME SAME
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">8</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>contextClassLoader <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>contextClassLoader <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span>
   L21
    LINENUMBER <span class="token number">414</span> L21
   FRAME SAME
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">6</span>
    IFNULL L22
    ALOAD <span class="token number">6</span>
    GOTO L23
   L22
    LINENUMBER <span class="token number">415</span> L22
   FRAME SAME1 java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread
    INVOKESTATIC java<span class="token operator">/</span>security<span class="token operator">/</span>AccessController<span class="token punctuation">.</span>getContext <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>security<span class="token operator">/</span>AccessControlContext<span class="token operator">;</span>
   L23
   FRAME FULL <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup java<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable java<span class="token operator">/</span>lang<span class="token operator">/</span>String J java<span class="token operator">/</span>security<span class="token operator">/</span>AccessControlContext I java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">]</span> <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread java<span class="token operator">/</span>security<span class="token operator">/</span>AccessControlContext<span class="token punctuation">]</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritedAccessControlContext <span class="token operator">:</span> Ljava<span class="token operator">/</span>security<span class="token operator">/</span>AccessControlContext<span class="token operator">;</span>
   L24
    LINENUMBER <span class="token number">416</span> L24
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">2</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>target <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>
   L25
    LINENUMBER <span class="token number">417</span> L25
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>priority <span class="token operator">:</span> I
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>setPriority <span class="token operator">(</span>I<span class="token operator">)</span>V
   L26
    LINENUMBER <span class="token number">418</span> L26
    ILOAD <span class="token number">7</span>
    IFEQ L27
    ALOAD <span class="token number">8</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
    IFNULL L27
   L28
    LINENUMBER <span class="token number">419</span> L28
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">8</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L29
    LINENUMBER <span class="token number">420</span> L29
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token punctuation">.</span>createInheritedMap <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L27
    LINENUMBER <span class="token number">422</span> L27
   FRAME SAME
    ALOAD <span class="token number">0</span>
    LLOAD <span class="token number">4</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stackSize <span class="token operator">:</span> J
   L30
    LINENUMBER <span class="token number">425</span> L30
    ALOAD <span class="token number">0</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>nextThreadID <span class="token operator">(</span><span class="token operator">)</span>J
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>tid <span class="token operator">:</span> J
   L31
    LINENUMBER <span class="token number">426</span> L31
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">3</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">10</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x4</span>
  protected clone<span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span> throws java<span class="token operator">/</span>lang<span class="token operator">/</span>CloneNotSupportedException 
   L0
    LINENUMBER <span class="token number">437</span> L0
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>CloneNotSupportedException
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>CloneNotSupportedException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    ATHROW
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span><span class="token operator">(</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">447</span> L0
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">157</span> L1
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L2
    LINENUMBER <span class="token number">160</span> L2
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stillborn <span class="token operator">:</span> Z
   L3
    LINENUMBER <span class="token number">182</span> L3
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">188</span> L4
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">214</span> L5
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
   L6
    LINENUMBER <span class="token number">234</span> L6
    ALOAD <span class="token number">0</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Object
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">448</span> L7
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    ACONST_NULL
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    LDC <span class="token string">&quot;Thread-&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>nextThreadNum <span class="token operator">(</span><span class="token operator">)</span>I
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>I<span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>toString <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
    LCONST_0
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>init <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>J<span class="token operator">)</span>V
   L8
    LINENUMBER <span class="token number">449</span> L8
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">6</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span><span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">463</span> L0
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">157</span> L1
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L2
    LINENUMBER <span class="token number">160</span> L2
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stillborn <span class="token operator">:</span> Z
   L3
    LINENUMBER <span class="token number">182</span> L3
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">188</span> L4
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">214</span> L5
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
   L6
    LINENUMBER <span class="token number">234</span> L6
    ALOAD <span class="token number">0</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Object
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">464</span> L7
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    ALOAD <span class="token number">1</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    LDC <span class="token string">&quot;Thread-&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>nextThreadNum <span class="token operator">(</span><span class="token operator">)</span>I
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>I<span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>toString <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
    LCONST_0
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>init <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>J<span class="token operator">)</span>V
   L8
    LINENUMBER <span class="token number">465</span> L8
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">6</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x0</span>
  <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span><span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>security<span class="token operator">/</span>AccessControlContext<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">471</span> L0
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">157</span> L1
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L2
    LINENUMBER <span class="token number">160</span> L2
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stillborn <span class="token operator">:</span> Z
   L3
    LINENUMBER <span class="token number">182</span> L3
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">188</span> L4
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">214</span> L5
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
   L6
    LINENUMBER <span class="token number">234</span> L6
    ALOAD <span class="token number">0</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Object
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">472</span> L7
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    ALOAD <span class="token number">1</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    LDC <span class="token string">&quot;Thread-&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>nextThreadNum <span class="token operator">(</span><span class="token operator">)</span>I
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>I<span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>toString <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
    LCONST_0
    ALOAD <span class="token number">2</span>
    ICONST_0
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>init <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>JLjava<span class="token operator">/</span>security<span class="token operator">/</span>AccessControlContext<span class="token operator">;</span>Z<span class="token operator">)</span>V
   L8
    LINENUMBER <span class="token number">473</span> L8
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">8</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">3</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span><span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">498</span> L0
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">157</span> L1
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L2
    LINENUMBER <span class="token number">160</span> L2
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stillborn <span class="token operator">:</span> Z
   L3
    LINENUMBER <span class="token number">182</span> L3
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">188</span> L4
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">214</span> L5
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
   L6
    LINENUMBER <span class="token number">234</span> L6
    ALOAD <span class="token number">0</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Object
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">499</span> L7
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    ALOAD <span class="token number">2</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    LDC <span class="token string">&quot;Thread-&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>nextThreadNum <span class="token operator">(</span><span class="token operator">)</span>I
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>I<span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>toString <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
    LCONST_0
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>init <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>J<span class="token operator">)</span>V
   L8
    LINENUMBER <span class="token number">500</span> L8
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">6</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">3</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span><span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">510</span> L0
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">157</span> L1
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L2
    LINENUMBER <span class="token number">160</span> L2
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stillborn <span class="token operator">:</span> Z
   L3
    LINENUMBER <span class="token number">182</span> L3
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">188</span> L4
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">214</span> L5
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
   L6
    LINENUMBER <span class="token number">234</span> L6
    ALOAD <span class="token number">0</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Object
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">511</span> L7
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    ACONST_NULL
    ALOAD <span class="token number">1</span>
    LCONST_0
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>init <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>J<span class="token operator">)</span>V
   L8
    LINENUMBER <span class="token number">512</span> L8
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">6</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span><span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">534</span> L0
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">157</span> L1
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L2
    LINENUMBER <span class="token number">160</span> L2
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stillborn <span class="token operator">:</span> Z
   L3
    LINENUMBER <span class="token number">182</span> L3
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">188</span> L4
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">214</span> L5
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
   L6
    LINENUMBER <span class="token number">234</span> L6
    ALOAD <span class="token number">0</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Object
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">535</span> L7
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    ACONST_NULL
    ALOAD <span class="token number">2</span>
    LCONST_0
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>init <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>J<span class="token operator">)</span>V
   L8
    LINENUMBER <span class="token number">536</span> L8
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">6</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">3</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span><span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">550</span> L0
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">157</span> L1
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L2
    LINENUMBER <span class="token number">160</span> L2
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stillborn <span class="token operator">:</span> Z
   L3
    LINENUMBER <span class="token number">182</span> L3
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">188</span> L4
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">214</span> L5
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
   L6
    LINENUMBER <span class="token number">234</span> L6
    ALOAD <span class="token number">0</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Object
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">551</span> L7
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    ALOAD <span class="token number">1</span>
    ALOAD <span class="token number">2</span>
    LCONST_0
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>init <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>J<span class="token operator">)</span>V
   L8
    LINENUMBER <span class="token number">552</span> L8
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">6</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">3</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span><span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">598</span> L0
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">157</span> L1
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L2
    LINENUMBER <span class="token number">160</span> L2
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stillborn <span class="token operator">:</span> Z
   L3
    LINENUMBER <span class="token number">182</span> L3
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">188</span> L4
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">214</span> L5
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
   L6
    LINENUMBER <span class="token number">234</span> L6
    ALOAD <span class="token number">0</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Object
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">599</span> L7
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    ALOAD <span class="token number">2</span>
    ALOAD <span class="token number">3</span>
    LCONST_0
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>init <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>J<span class="token operator">)</span>V
   L8
    LINENUMBER <span class="token number">600</span> L8
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">6</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">4</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span><span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>J<span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">677</span> L0
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">157</span> L1
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L2
    LINENUMBER <span class="token number">160</span> L2
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stillborn <span class="token operator">:</span> Z
   L3
    LINENUMBER <span class="token number">182</span> L3
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">188</span> L4
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">214</span> L5
    ALOAD <span class="token number">0</span>
    ICONST_0
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
   L6
    LINENUMBER <span class="token number">234</span> L6
    ALOAD <span class="token number">0</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Object
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">678</span> L7
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    ALOAD <span class="token number">2</span>
    ALOAD <span class="token number">3</span>
    LLOAD <span class="token number">4</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>init <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>J<span class="token operator">)</span>V
   L8
    LINENUMBER <span class="token number">679</span> L8
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">6</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">6</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x21</span>
  public synchronized start<span class="token operator">(</span><span class="token operator">)</span>V
    TRYCATCHBLOCK L0 L1 L2 java<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable
    TRYCATCHBLOCK L3 L0 L4 <span class="token boolean">null</span>
    TRYCATCHBLOCK L5 L6 L7 java<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable
   L8
    LINENUMBER <span class="token number">707</span> L8
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
    IFEQ L9
   L10
    LINENUMBER <span class="token number">708</span> L10
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalThreadStateException
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalThreadStateException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    ATHROW
   L9
    LINENUMBER <span class="token number">713</span> L9
   FRAME SAME
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>group <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>add <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span>V
   L11
    LINENUMBER <span class="token number">715</span> L11
    ICONST_0
    ISTORE <span class="token number">1</span>
   L3
    LINENUMBER <span class="token number">717</span> L3
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>start0 <span class="token operator">(</span><span class="token operator">)</span>V
   L12
    LINENUMBER <span class="token number">718</span> L12
    ICONST_1
    ISTORE <span class="token number">1</span>
   L0
    LINENUMBER <span class="token number">721</span> L0
    ILOAD <span class="token number">1</span>
    IFNE L1
   L13
    LINENUMBER <span class="token number">722</span> L13
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>group <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>threadStartFailed <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">727</span> L1
   FRAME APPEND <span class="token punctuation">[</span>I<span class="token punctuation">]</span>
    GOTO L14
   L2
    LINENUMBER <span class="token number">724</span> L2
   FRAME SAME1 java<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable
    ASTORE <span class="token number">2</span>
   L15
    LINENUMBER <span class="token number">728</span> L15
    GOTO L14
   L4
    LINENUMBER <span class="token number">720</span> L4
   FRAME SAME1 java<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable
    ASTORE <span class="token number">3</span>
   L5
    LINENUMBER <span class="token number">721</span> L5
    ILOAD <span class="token number">1</span>
    IFNE L6
   L16
    LINENUMBER <span class="token number">722</span> L16
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>group <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>threadStartFailed <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span>V
   L6
    LINENUMBER <span class="token number">727</span> L6
   FRAME APPEND <span class="token punctuation">[</span>T java<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable<span class="token punctuation">]</span>
    GOTO L17
   L7
    LINENUMBER <span class="token number">724</span> L7
   FRAME SAME1 java<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable
    ASTORE <span class="token number">4</span>
   L17
    LINENUMBER <span class="token number">728</span> L17
   FRAME SAME
    ALOAD <span class="token number">3</span>
    ATHROW
   L14
    LINENUMBER <span class="token number">729</span> L14
   FRAME CHOP <span class="token number">2</span>
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">5</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x102</span>
  private native start0<span class="token operator">(</span><span class="token operator">)</span>V

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public run<span class="token operator">(</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">747</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>target <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>
    IFNULL L1
   L2
    LINENUMBER <span class="token number">748</span> L2
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>target <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>
    INVOKEINTERFACE java<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token punctuation">.</span>run <span class="token operator">(</span><span class="token operator">)</span>V <span class="token operator">(</span>itf<span class="token operator">)</span>
   L1
    LINENUMBER <span class="token number">750</span> L1
   FRAME SAME
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private exit<span class="token operator">(</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">757</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>group <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    IFNULL L1
   L2
    LINENUMBER <span class="token number">758</span> L2
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>group <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>threadTerminated <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span>V
   L3
    LINENUMBER <span class="token number">759</span> L3
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>group <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
   L1
    LINENUMBER <span class="token number">762</span> L1
   FRAME SAME
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>target <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Runnable<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">764</span> L4
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">765</span> L5
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritableThreadLocals <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadLocal<span class="token operator">$</span>ThreadLocalMap<span class="token operator">;</span>
   L6
    LINENUMBER <span class="token number">766</span> L6
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>inheritedAccessControlContext <span class="token operator">:</span> Ljava<span class="token operator">/</span>security<span class="token operator">/</span>AccessControlContext<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">767</span> L7
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blocker <span class="token operator">:</span> Lsun<span class="token operator">/</span>nio<span class="token operator">/</span>ch<span class="token operator">/</span>Interruptible<span class="token operator">;</span>
   L8
    LINENUMBER <span class="token number">768</span> L8
    ALOAD <span class="token number">0</span>
    ACONST_NULL
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>uncaughtExceptionHandler <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span>
   L9
    LINENUMBER <span class="token number">769</span> L9
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> DEPRECATED
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x20011</span>
  public final stop<span class="token operator">(</span><span class="token operator">)</span>V
  <span class="token operator">@</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Deprecated<span class="token operator">;</span><span class="token operator">(</span><span class="token operator">)</span>
   L0
    LINENUMBER <span class="token number">839</span> L0
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>System<span class="token punctuation">.</span>getSecurityManager <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token operator">;</span>
    ASTORE <span class="token number">1</span>
   L1
    LINENUMBER <span class="token number">840</span> L1
    ALOAD <span class="token number">1</span>
    IFNULL L2
   L3
    LINENUMBER <span class="token number">841</span> L3
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>checkAccess <span class="token operator">(</span><span class="token operator">)</span>V
   L4
    LINENUMBER <span class="token number">842</span> L4
    ALOAD <span class="token number">0</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>currentThread <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>
    IF_ACMPEQ L2
   L5
    LINENUMBER <span class="token number">843</span> L5
    ALOAD <span class="token number">1</span>
    GETSTATIC sun<span class="token operator">/</span>security<span class="token operator">/</span>util<span class="token operator">/</span>SecurityConstants<span class="token punctuation">.</span>STOP_THREAD_PERMISSION <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">.</span>checkPermission <span class="token operator">(</span>Ljava<span class="token operator">/</span>security<span class="token operator">/</span>Permission<span class="token operator">;</span><span class="token operator">)</span>V
   L2
    LINENUMBER <span class="token number">848</span> L2
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">]</span>
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
    IFEQ L6
   L7
    LINENUMBER <span class="token number">849</span> L7
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>resume <span class="token operator">(</span><span class="token operator">)</span>V
   L6
    LINENUMBER <span class="token number">853</span> L6
   FRAME SAME
    ALOAD <span class="token number">0</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadDeath
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadDeath<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>stop0 <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span><span class="token operator">)</span>V
   L8
    LINENUMBER <span class="token number">854</span> L8
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">3</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> DEPRECATED
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x20031</span>
  public final synchronized stop<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable<span class="token operator">;</span><span class="token operator">)</span>V
  <span class="token operator">@</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Deprecated<span class="token operator">;</span><span class="token operator">(</span><span class="token operator">)</span>
   L0
    LINENUMBER <span class="token number">872</span> L0
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>UnsupportedOperationException
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>UnsupportedOperationException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    ATHROW
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public interrupt<span class="token operator">(</span><span class="token operator">)</span>V
    TRYCATCHBLOCK L0 L1 L2 <span class="token boolean">null</span>
    TRYCATCHBLOCK L3 L4 L2 <span class="token boolean">null</span>
    TRYCATCHBLOCK L2 L5 L2 <span class="token boolean">null</span>
   L6
    LINENUMBER <span class="token number">915</span> L6
    ALOAD <span class="token number">0</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>currentThread <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>
    IF_ACMPEQ L7
   L8
    LINENUMBER <span class="token number">916</span> L8
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>checkAccess <span class="token operator">(</span><span class="token operator">)</span>V
   L7
    LINENUMBER <span class="token number">918</span> L7
   FRAME SAME
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blockerLock <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
    DUP
    ASTORE <span class="token number">1</span>
    MONITORENTER
   L0
    LINENUMBER <span class="token number">919</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>blocker <span class="token operator">:</span> Lsun<span class="token operator">/</span>nio<span class="token operator">/</span>ch<span class="token operator">/</span>Interruptible<span class="token operator">;</span>
    ASTORE <span class="token number">2</span>
   L9
    LINENUMBER <span class="token number">920</span> L9
    ALOAD <span class="token number">2</span>
    IFNULL L3
   L10
    LINENUMBER <span class="token number">921</span> L10
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>interrupt0 <span class="token operator">(</span><span class="token operator">)</span>V
   L11
    LINENUMBER <span class="token number">922</span> L11
    ALOAD <span class="token number">2</span>
    ALOAD <span class="token number">0</span>
    INVOKEINTERFACE sun<span class="token operator">/</span>nio<span class="token operator">/</span>ch<span class="token operator">/</span>Interruptible<span class="token punctuation">.</span>interrupt <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span>V <span class="token operator">(</span>itf<span class="token operator">)</span>
   L12
    LINENUMBER <span class="token number">923</span> L12
    ALOAD <span class="token number">1</span>
    MONITOREXIT
   L1
    RETURN
   L3
    LINENUMBER <span class="token number">925</span> L3
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">]</span>
    ALOAD <span class="token number">1</span>
    MONITOREXIT
   L4
    GOTO L13
   L2
   FRAME SAME1 java<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable
    ASTORE <span class="token number">3</span>
    ALOAD <span class="token number">1</span>
    MONITOREXIT
   L5
    ALOAD <span class="token number">3</span>
    ATHROW
   L13
    LINENUMBER <span class="token number">926</span> L13
   FRAME CHOP <span class="token number">1</span>
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>interrupt0 <span class="token operator">(</span><span class="token operator">)</span>V
   L14
    LINENUMBER <span class="token number">927</span> L14
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">4</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x9</span>
  public static interrupted<span class="token operator">(</span><span class="token operator">)</span>Z
   L0
    LINENUMBER <span class="token number">947</span> L0
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>currentThread <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>
    ICONST_1
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>isInterrupted <span class="token operator">(</span>Z<span class="token operator">)</span>Z
    IRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public isInterrupted<span class="token operator">(</span><span class="token operator">)</span>Z
   L0
    LINENUMBER <span class="token number">964</span> L0
    ALOAD <span class="token number">0</span>
    ICONST_0
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>isInterrupted <span class="token operator">(</span>Z<span class="token operator">)</span>Z
    IRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x102</span>
  private native isInterrupted<span class="token operator">(</span>Z<span class="token operator">)</span>Z

  <span class="token operator">/</span><span class="token operator">/</span> DEPRECATED
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x20001</span>
  public destroy<span class="token operator">(</span><span class="token operator">)</span>V
  <span class="token operator">@</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Deprecated<span class="token operator">;</span><span class="token operator">(</span><span class="token operator">)</span>
   L0
    LINENUMBER <span class="token number">993</span> L0
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>NoSuchMethodError
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>NoSuchMethodError<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    ATHROW
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x111</span>
  public final native isAlive<span class="token operator">(</span><span class="token operator">)</span>Z

  <span class="token operator">/</span><span class="token operator">/</span> DEPRECATED
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x20011</span>
  public final suspend<span class="token operator">(</span><span class="token operator">)</span>V
  <span class="token operator">@</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Deprecated<span class="token operator">;</span><span class="token operator">(</span><span class="token operator">)</span>
   L0
    LINENUMBER <span class="token number">1031</span> L0
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>checkAccess <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">1032</span> L1
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>suspend0 <span class="token operator">(</span><span class="token operator">)</span>V
   L2
    LINENUMBER <span class="token number">1033</span> L2
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> DEPRECATED
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x20011</span>
  public final resume<span class="token operator">(</span><span class="token operator">)</span>V
  <span class="token operator">@</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Deprecated<span class="token operator">;</span><span class="token operator">(</span><span class="token operator">)</span>
   L0
    LINENUMBER <span class="token number">1057</span> L0
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>checkAccess <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">1058</span> L1
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>resume0 <span class="token operator">(</span><span class="token operator">)</span>V
   L2
    LINENUMBER <span class="token number">1059</span> L2
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x11</span>
  public final setPriority<span class="token operator">(</span>I<span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">1087</span> L0
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>checkAccess <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">1088</span> L1
    ILOAD <span class="token number">1</span>
    BIPUSH <span class="token number">10</span>
    IF_ICMPGT L2
    ILOAD <span class="token number">1</span>
    ICONST_1
    IF_ICMPGE L3
   L2
    LINENUMBER <span class="token number">1089</span> L2
   FRAME SAME
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    ATHROW
   L3
    LINENUMBER <span class="token number">1091</span> L3
   FRAME SAME
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getThreadGroup <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    DUP
    ASTORE <span class="token number">2</span>
    IFNULL L4
   L5
    LINENUMBER <span class="token number">1092</span> L5
    ILOAD <span class="token number">1</span>
    ALOAD <span class="token number">2</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>getMaxPriority <span class="token operator">(</span><span class="token operator">)</span>I
    IF_ICMPLE L6
   L7
    LINENUMBER <span class="token number">1093</span> L7
    ALOAD <span class="token number">2</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>getMaxPriority <span class="token operator">(</span><span class="token operator">)</span>I
    ISTORE <span class="token number">1</span>
   L6
    LINENUMBER <span class="token number">1095</span> L6
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">]</span>
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">0</span>
    ILOAD <span class="token number">1</span>
    DUP_X1
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>priority <span class="token operator">:</span> I
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>setPriority0 <span class="token operator">(</span>I<span class="token operator">)</span>V
   L4
    LINENUMBER <span class="token number">1097</span> L4
   FRAME SAME
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">4</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">3</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x11</span>
  public final getPriority<span class="token operator">(</span><span class="token operator">)</span>I
   L0
    LINENUMBER <span class="token number">1106</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>priority <span class="token operator">:</span> I
    IRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x31</span>
  public final synchronized setName<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">1124</span> L0
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>checkAccess <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">1125</span> L1
    ALOAD <span class="token number">1</span>
    IFNONNULL L2
   L3
    LINENUMBER <span class="token number">1126</span> L3
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>NullPointerException
    DUP
    LDC <span class="token string">&quot;name cannot be null&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>NullPointerException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    ATHROW
   L2
    LINENUMBER <span class="token number">1129</span> L2
   FRAME SAME
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>name <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">1130</span> L4
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
    IFEQ L5
   L6
    LINENUMBER <span class="token number">1131</span> L6
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>setNativeName <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
   L5
    LINENUMBER <span class="token number">1133</span> L5
   FRAME SAME
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">3</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x11</span>
  public final getName<span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
   L0
    LINENUMBER <span class="token number">1142</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>name <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
    ARETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x11</span>
  public final getThreadGroup<span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
   L0
    LINENUMBER <span class="token number">1153</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>group <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    ARETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x9</span>
  public static activeCount<span class="token operator">(</span><span class="token operator">)</span>I
   L0
    LINENUMBER <span class="token number">1173</span> L0
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>currentThread <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getThreadGroup <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>activeCount <span class="token operator">(</span><span class="token operator">)</span>I
    IRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x9</span>
  public static enumerate<span class="token operator">(</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span>I
   L0
    LINENUMBER <span class="token number">1203</span> L0
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>currentThread <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getThreadGroup <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>enumerate <span class="token operator">(</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span>I
    IRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> DEPRECATED
  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x20101</span>
  public native countStackFrames<span class="token operator">(</span><span class="token operator">)</span>I
  <span class="token operator">@</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Deprecated<span class="token operator">;</span><span class="token operator">(</span><span class="token operator">)</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x31</span>
  public final synchronized join<span class="token operator">(</span>J<span class="token operator">)</span>V throws java<span class="token operator">/</span>lang<span class="token operator">/</span>InterruptedException 
   L0
    LINENUMBER <span class="token number">1243</span> L0
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>System<span class="token punctuation">.</span>currentTimeMillis <span class="token operator">(</span><span class="token operator">)</span>J
    LSTORE <span class="token number">3</span>
   L1
    LINENUMBER <span class="token number">1244</span> L1
    LCONST_0
    LSTORE <span class="token number">5</span>
   L2
    LINENUMBER <span class="token number">1246</span> L2
    LLOAD <span class="token number">1</span>
    LCONST_0
    LCMP
    IFGE L3
   L4
    LINENUMBER <span class="token number">1247</span> L4
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException
    DUP
    LDC <span class="token string">&quot;timeout value is negative&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    ATHROW
   L3
    LINENUMBER <span class="token number">1250</span> L3
   FRAME APPEND <span class="token punctuation">[</span>J J<span class="token punctuation">]</span>
    LLOAD <span class="token number">1</span>
    LCONST_0
    LCMP
    IFNE L5
   L6
    LINENUMBER <span class="token number">1251</span> L6
   FRAME SAME
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>isAlive <span class="token operator">(</span><span class="token operator">)</span>Z
    IFEQ L7
   L8
    LINENUMBER <span class="token number">1252</span> L8
    ALOAD <span class="token number">0</span>
    LCONST_0
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span>wait <span class="token operator">(</span>J<span class="token operator">)</span>V
    GOTO L6
   L5
    LINENUMBER <span class="token number">1255</span> L5
   FRAME SAME
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>isAlive <span class="token operator">(</span><span class="token operator">)</span>Z
    IFEQ L7
   L9
    LINENUMBER <span class="token number">1256</span> L9
    LLOAD <span class="token number">1</span>
    LLOAD <span class="token number">5</span>
    LSUB
    LSTORE <span class="token number">7</span>
   L10
    LINENUMBER <span class="token number">1257</span> L10
    LLOAD <span class="token number">7</span>
    LCONST_0
    LCMP
    IFGT L11
   L12
    LINENUMBER <span class="token number">1258</span> L12
    GOTO L7
   L11
    LINENUMBER <span class="token number">1260</span> L11
   FRAME APPEND <span class="token punctuation">[</span>J<span class="token punctuation">]</span>
    ALOAD <span class="token number">0</span>
    LLOAD <span class="token number">7</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token punctuation">.</span>wait <span class="token operator">(</span>J<span class="token operator">)</span>V
   L13
    LINENUMBER <span class="token number">1261</span> L13
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>System<span class="token punctuation">.</span>currentTimeMillis <span class="token operator">(</span><span class="token operator">)</span>J
    LLOAD <span class="token number">3</span>
    LSUB
    LSTORE <span class="token number">5</span>
   L14
    LINENUMBER <span class="token number">1262</span> L14
    GOTO L5
   L7
    LINENUMBER <span class="token number">1264</span> L7
   FRAME CHOP <span class="token number">1</span>
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">4</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">9</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x31</span>
  public final synchronized join<span class="token operator">(</span>JI<span class="token operator">)</span>V throws java<span class="token operator">/</span>lang<span class="token operator">/</span>InterruptedException 
   L0
    LINENUMBER <span class="token number">1294</span> L0
    LLOAD <span class="token number">1</span>
    LCONST_0
    LCMP
    IFGE L1
   L2
    LINENUMBER <span class="token number">1295</span> L2
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException
    DUP
    LDC <span class="token string">&quot;timeout value is negative&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    ATHROW
   L1
    LINENUMBER <span class="token number">1298</span> L1
   FRAME SAME
    ILOAD <span class="token number">3</span>
    IFLT L3
    ILOAD <span class="token number">3</span>
    LDC <span class="token number">999999</span>
    IF_ICMPLE L4
   L3
    LINENUMBER <span class="token number">1299</span> L3
   FRAME SAME
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException
    DUP
    LDC <span class="token string">&quot;nanosecond timeout value out of range&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalArgumentException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    ATHROW
   L4
    LINENUMBER <span class="token number">1303</span> L4
   FRAME SAME
    ILOAD <span class="token number">3</span>
    LDC <span class="token number">500000</span>
    IF_ICMPGE L5
    ILOAD <span class="token number">3</span>
    IFEQ L6
    LLOAD <span class="token number">1</span>
    LCONST_0
    LCMP
    IFNE L6
   L5
    LINENUMBER <span class="token number">1304</span> L5
   FRAME SAME
    LLOAD <span class="token number">1</span>
    LCONST_1
    LADD
    LSTORE <span class="token number">1</span>
   L6
    LINENUMBER <span class="token number">1307</span> L6
   FRAME SAME
    ALOAD <span class="token number">0</span>
    LLOAD <span class="token number">1</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>join <span class="token operator">(</span>J<span class="token operator">)</span>V
   L7
    LINENUMBER <span class="token number">1308</span> L7
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">4</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">4</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x11</span>
  public final join<span class="token operator">(</span><span class="token operator">)</span>V throws java<span class="token operator">/</span>lang<span class="token operator">/</span>InterruptedException 
   L0
    LINENUMBER <span class="token number">1326</span> L0
    ALOAD <span class="token number">0</span>
    LCONST_0
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>join <span class="token operator">(</span>J<span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">1327</span> L1
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">3</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x9</span>
  public static dumpStack<span class="token operator">(</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">1336</span> L0
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Exception
    DUP
    LDC <span class="token string">&quot;Stack trace&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Exception<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Exception<span class="token punctuation">.</span>printStackTrace <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">1337</span> L1
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">3</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x11</span>
  public final setDaemon<span class="token operator">(</span>Z<span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">1357</span> L0
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>checkAccess <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">1358</span> L1
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>isAlive <span class="token operator">(</span><span class="token operator">)</span>Z
    IFEQ L2
   L3
    LINENUMBER <span class="token number">1359</span> L3
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalThreadStateException
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>IllegalThreadStateException<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    ATHROW
   L2
    LINENUMBER <span class="token number">1361</span> L2
   FRAME SAME
    ALOAD <span class="token number">0</span>
    ILOAD <span class="token number">1</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
   L4
    LINENUMBER <span class="token number">1362</span> L4
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x11</span>
  public final isDaemon<span class="token operator">(</span><span class="token operator">)</span>Z
   L0
    LINENUMBER <span class="token number">1372</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>daemon <span class="token operator">:</span> Z
    IRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x11</span>
  public final checkAccess<span class="token operator">(</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">1388</span> L0
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>System<span class="token punctuation">.</span>getSecurityManager <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token operator">;</span>
    ASTORE <span class="token number">1</span>
   L1
    LINENUMBER <span class="token number">1389</span> L1
    ALOAD <span class="token number">1</span>
    IFNULL L2
   L3
    LINENUMBER <span class="token number">1390</span> L3
    ALOAD <span class="token number">1</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">.</span>checkAccess <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span>V
   L2
    LINENUMBER <span class="token number">1392</span> L2
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">]</span>
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public toString<span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
   L0
    LINENUMBER <span class="token number">1401</span> L0
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getThreadGroup <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
    ASTORE <span class="token number">1</span>
   L1
    LINENUMBER <span class="token number">1402</span> L1
    ALOAD <span class="token number">1</span>
    IFNULL L2
   L3
    LINENUMBER <span class="token number">1403</span> L3
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    LDC <span class="token string">&quot;Thread[&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getName <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    LDC <span class="token string">&quot;,&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getPriority <span class="token operator">(</span><span class="token operator">)</span>I
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>I<span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    LDC <span class="token string">&quot;,&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    ALOAD <span class="token number">1</span>
   L4
    LINENUMBER <span class="token number">1404</span> L4
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">.</span>getName <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    LDC <span class="token string">&quot;]&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>toString <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
   L5
    LINENUMBER <span class="token number">1403</span> L5
    ARETURN
   L2
    LINENUMBER <span class="token number">1406</span> L2
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token punctuation">]</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    LDC <span class="token string">&quot;Thread[&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getName <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    LDC <span class="token string">&quot;,&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getPriority <span class="token operator">(</span><span class="token operator">)</span>I
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>I<span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    LDC <span class="token string">&quot;,]&quot;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>append <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>StringBuilder<span class="token punctuation">.</span>toString <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span>
    ARETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public getContextClassLoader<span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span>
  <span class="token operator">@</span>Lsun<span class="token operator">/</span>reflect<span class="token operator">/</span>CallerSensitive<span class="token operator">;</span><span class="token operator">(</span><span class="token operator">)</span>
   L0
    LINENUMBER <span class="token number">1439</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>contextClassLoader <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span>
    IFNONNULL L1
   L2
    LINENUMBER <span class="token number">1440</span> L2
    ACONST_NULL
    ARETURN
   L1
    LINENUMBER <span class="token number">1441</span> L1
   FRAME SAME
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>System<span class="token punctuation">.</span>getSecurityManager <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token operator">;</span>
    ASTORE <span class="token number">1</span>
   L3
    LINENUMBER <span class="token number">1442</span> L3
    ALOAD <span class="token number">1</span>
    IFNULL L4
   L5
    LINENUMBER <span class="token number">1443</span> L5
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>contextClassLoader <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span>
   L6
    LINENUMBER <span class="token number">1444</span> L6
    INVOKESTATIC sun<span class="token operator">/</span>reflect<span class="token operator">/</span>Reflection<span class="token punctuation">.</span>getCallerClass <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span>
   L7
    LINENUMBER <span class="token number">1443</span> L7
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token punctuation">.</span>checkClassLoaderPermission <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span><span class="token operator">)</span>V
   L4
    LINENUMBER <span class="token number">1446</span> L4
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">]</span>
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>contextClassLoader <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span>
    ARETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public setContextClassLoader<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">1472</span> L0
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>System<span class="token punctuation">.</span>getSecurityManager <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token operator">;</span>
    ASTORE <span class="token number">2</span>
   L1
    LINENUMBER <span class="token number">1473</span> L1
    ALOAD <span class="token number">2</span>
    IFNULL L2
   L3
    LINENUMBER <span class="token number">1474</span> L3
    ALOAD <span class="token number">2</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission
    DUP
    LDC <span class="token string">&quot;setContextClassLoader&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">.</span>checkPermission <span class="token operator">(</span>Ljava<span class="token operator">/</span>security<span class="token operator">/</span>Permission<span class="token operator">;</span><span class="token operator">)</span>V
   L2
    LINENUMBER <span class="token number">1476</span> L2
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">]</span>
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>contextClassLoader <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ClassLoader<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">1477</span> L4
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">4</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">3</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x109</span>
  public static native holdsLock<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span><span class="token operator">)</span>Z

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public getStackTrace<span class="token operator">(</span><span class="token operator">)</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span>
   L0
    LINENUMBER <span class="token number">1537</span> L0
    ALOAD <span class="token number">0</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>currentThread <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>
    IF_ACMPEQ L1
   L2
    LINENUMBER <span class="token number">1539</span> L2
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>System<span class="token punctuation">.</span>getSecurityManager <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token operator">;</span>
    ASTORE <span class="token number">1</span>
   L3
    LINENUMBER <span class="token number">1540</span> L3
    ALOAD <span class="token number">1</span>
    IFNULL L4
   L5
    LINENUMBER <span class="token number">1541</span> L5
    ALOAD <span class="token number">1</span>
    GETSTATIC sun<span class="token operator">/</span>security<span class="token operator">/</span>util<span class="token operator">/</span>SecurityConstants<span class="token punctuation">.</span>GET_STACK_TRACE_PERMISSION <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">.</span>checkPermission <span class="token operator">(</span>Ljava<span class="token operator">/</span>security<span class="token operator">/</span>Permission<span class="token operator">;</span><span class="token operator">)</span>V
   L4
    LINENUMBER <span class="token number">1546</span> L4
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">]</span>
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>isAlive <span class="token operator">(</span><span class="token operator">)</span>Z
    IFNE L6
   L7
    LINENUMBER <span class="token number">1547</span> L7
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>EMPTY_STACK_TRACE <span class="token operator">:</span> <span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span>
    ARETURN
   L6
    LINENUMBER <span class="token number">1549</span> L6
   FRAME SAME
    ICONST_1
    ANEWARRAY java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread
    DUP
    ICONST_0
    ALOAD <span class="token number">0</span>
    AASTORE
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>dumpThreads <span class="token operator">(</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span><span class="token punctuation">[</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span>
    ASTORE <span class="token number">2</span>
   L8
    LINENUMBER <span class="token number">1550</span> L8
    ALOAD <span class="token number">2</span>
    ICONST_0
    AALOAD
    ASTORE <span class="token number">3</span>
   L9
    LINENUMBER <span class="token number">1553</span> L9
    ALOAD <span class="token number">3</span>
    IFNONNULL L10
   L11
    LINENUMBER <span class="token number">1554</span> L11
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>EMPTY_STACK_TRACE <span class="token operator">:</span> <span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span>
    ASTORE <span class="token number">3</span>
   L10
    LINENUMBER <span class="token number">1556</span> L10
   FRAME APPEND <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span> <span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span><span class="token punctuation">]</span>
    ALOAD <span class="token number">3</span>
    ARETURN
   L1
    LINENUMBER <span class="token number">1559</span> L1
   FRAME CHOP <span class="token number">3</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Exception
    DUP
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Exception<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span><span class="token operator">)</span>V
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Exception<span class="token punctuation">.</span>getStackTrace <span class="token operator">(</span><span class="token operator">)</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span>
    ARETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">4</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">4</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x9</span>
  <span class="token operator">/</span><span class="token operator">/</span> signature <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>util<span class="token operator">/</span>Map<span class="token operator">&lt;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span><span class="token operator">&gt;</span><span class="token operator">;</span>
  <span class="token operator">/</span><span class="token operator">/</span> declaration<span class="token operator">:</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map<span class="token operator">&lt;</span>java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Thread<span class="token punctuation">,</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>StackTraceElement<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> getAllStackTraces<span class="token operator">(</span><span class="token operator">)</span>
  public static getAllStackTraces<span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>util<span class="token operator">/</span>Map<span class="token operator">;</span>
   L0
    LINENUMBER <span class="token number">1600</span> L0
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>System<span class="token punctuation">.</span>getSecurityManager <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token operator">;</span>
    ASTORE <span class="token number">0</span>
   L1
    LINENUMBER <span class="token number">1601</span> L1
    ALOAD <span class="token number">0</span>
    IFNULL L2
   L3
    LINENUMBER <span class="token number">1602</span> L3
    ALOAD <span class="token number">0</span>
    GETSTATIC sun<span class="token operator">/</span>security<span class="token operator">/</span>util<span class="token operator">/</span>SecurityConstants<span class="token punctuation">.</span>GET_STACK_TRACE_PERMISSION <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">.</span>checkPermission <span class="token operator">(</span>Ljava<span class="token operator">/</span>security<span class="token operator">/</span>Permission<span class="token operator">;</span><span class="token operator">)</span>V
   L4
    LINENUMBER <span class="token number">1604</span> L4
    ALOAD <span class="token number">0</span>
    GETSTATIC sun<span class="token operator">/</span>security<span class="token operator">/</span>util<span class="token operator">/</span>SecurityConstants<span class="token punctuation">.</span>MODIFY_THREADGROUP_PERMISSION <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission<span class="token operator">;</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">.</span>checkPermission <span class="token operator">(</span>Ljava<span class="token operator">/</span>security<span class="token operator">/</span>Permission<span class="token operator">;</span><span class="token operator">)</span>V
   L2
    LINENUMBER <span class="token number">1609</span> L2
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">]</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getThreads <span class="token operator">(</span><span class="token operator">)</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>
    ASTORE <span class="token number">1</span>
   L5
    LINENUMBER <span class="token number">1610</span> L5
    ALOAD <span class="token number">1</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>dumpThreads <span class="token operator">(</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span><span class="token punctuation">[</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span>
    ASTORE <span class="token number">2</span>
   L6
    LINENUMBER <span class="token number">1611</span> L6
    NEW java<span class="token operator">/</span>util<span class="token operator">/</span>HashMap
    DUP
    ALOAD <span class="token number">1</span>
    ARRAYLENGTH
    INVOKESPECIAL java<span class="token operator">/</span>util<span class="token operator">/</span>HashMap<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>I<span class="token operator">)</span>V
    ASTORE <span class="token number">3</span>
   L7
    LINENUMBER <span class="token number">1612</span> L7
    ICONST_0
    ISTORE <span class="token number">4</span>
   L8
   FRAME FULL <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager <span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span> java<span class="token operator">/</span>util<span class="token operator">/</span>Map I<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    ILOAD <span class="token number">4</span>
    ALOAD <span class="token number">1</span>
    ARRAYLENGTH
    IF_ICMPGE L9
   L10
    LINENUMBER <span class="token number">1613</span> L10
    ALOAD <span class="token number">2</span>
    ILOAD <span class="token number">4</span>
    AALOAD
    ASTORE <span class="token number">5</span>
   L11
    LINENUMBER <span class="token number">1614</span> L11
    ALOAD <span class="token number">5</span>
    IFNULL L12
   L13
    LINENUMBER <span class="token number">1615</span> L13
    ALOAD <span class="token number">3</span>
    ALOAD <span class="token number">1</span>
    ILOAD <span class="token number">4</span>
    AALOAD
    ALOAD <span class="token number">5</span>
    INVOKEINTERFACE java<span class="token operator">/</span>util<span class="token operator">/</span>Map<span class="token punctuation">.</span>put <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span> <span class="token operator">(</span>itf<span class="token operator">)</span>
    POP
   L12
    LINENUMBER <span class="token number">1612</span> L12
   FRAME SAME
    IINC <span class="token number">4</span> <span class="token number">1</span>
    GOTO L8
   L9
    LINENUMBER <span class="token number">1619</span> L9
   FRAME CHOP <span class="token number">1</span>
    ALOAD <span class="token number">3</span>
    ARETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">3</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">6</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0xA</span>
  <span class="token operator">/</span><span class="token operator">/</span> signature <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">;</span><span class="token operator">)</span>Z
  <span class="token operator">/</span><span class="token operator">/</span> declaration<span class="token operator">:</span> boolean isCCLOverridden<span class="token operator">(</span>java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">)</span>
  private static isCCLOverridden<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span><span class="token operator">)</span>Z
   L0
    LINENUMBER <span class="token number">1646</span> L0
    ALOAD <span class="token number">0</span>
    LDC Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token punctuation">.</span>class
    IF_ACMPNE L1
   L2
    LINENUMBER <span class="token number">1647</span> L2
    ICONST_0
    IRETURN
   L1
    LINENUMBER <span class="token number">1649</span> L1
   FRAME SAME
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>Caches<span class="token punctuation">.</span>subclassAuditsQueue <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ref<span class="token operator">/</span>ReferenceQueue<span class="token operator">;</span>
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>Caches<span class="token punctuation">.</span>subclassAudits <span class="token operator">:</span> Ljava<span class="token operator">/</span>util<span class="token operator">/</span>concurrent<span class="token operator">/</span>ConcurrentMap<span class="token operator">;</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>processQueue <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ref<span class="token operator">/</span>ReferenceQueue<span class="token operator">;</span>Ljava<span class="token operator">/</span>util<span class="token operator">/</span>concurrent<span class="token operator">/</span>ConcurrentMap<span class="token operator">;</span><span class="token operator">)</span>V
   L3
    LINENUMBER <span class="token number">1650</span> L3
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>WeakClassKey
    DUP
    ALOAD <span class="token number">0</span>
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>Caches<span class="token punctuation">.</span>subclassAuditsQueue <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ref<span class="token operator">/</span>ReferenceQueue<span class="token operator">;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>WeakClassKey<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ref<span class="token operator">/</span>ReferenceQueue<span class="token operator">;</span><span class="token operator">)</span>V
    ASTORE <span class="token number">1</span>
   L4
    LINENUMBER <span class="token number">1651</span> L4
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>Caches<span class="token punctuation">.</span>subclassAudits <span class="token operator">:</span> Ljava<span class="token operator">/</span>util<span class="token operator">/</span>concurrent<span class="token operator">/</span>ConcurrentMap<span class="token operator">;</span>
    ALOAD <span class="token number">1</span>
    INVOKEINTERFACE java<span class="token operator">/</span>util<span class="token operator">/</span>concurrent<span class="token operator">/</span>ConcurrentMap<span class="token punctuation">.</span>get <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span> <span class="token operator">(</span>itf<span class="token operator">)</span>
    CHECKCAST java<span class="token operator">/</span>lang<span class="token operator">/</span>Boolean
    ASTORE <span class="token number">2</span>
   L5
    LINENUMBER <span class="token number">1652</span> L5
    ALOAD <span class="token number">2</span>
    IFNONNULL L6
   L7
    LINENUMBER <span class="token number">1653</span> L7
    ALOAD <span class="token number">0</span>
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>auditSubclass <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span><span class="token operator">)</span>Z
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Boolean<span class="token punctuation">.</span>valueOf <span class="token operator">(</span>Z<span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Boolean<span class="token operator">;</span>
    ASTORE <span class="token number">2</span>
   L8
    LINENUMBER <span class="token number">1654</span> L8
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>Caches<span class="token punctuation">.</span>subclassAudits <span class="token operator">:</span> Ljava<span class="token operator">/</span>util<span class="token operator">/</span>concurrent<span class="token operator">/</span>ConcurrentMap<span class="token operator">;</span>
    ALOAD <span class="token number">1</span>
    ALOAD <span class="token number">2</span>
    INVOKEINTERFACE java<span class="token operator">/</span>util<span class="token operator">/</span>concurrent<span class="token operator">/</span>ConcurrentMap<span class="token punctuation">.</span>putIfAbsent <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span> <span class="token operator">(</span>itf<span class="token operator">)</span>
    POP
   L6
    LINENUMBER <span class="token number">1657</span> L6
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>WeakClassKey java<span class="token operator">/</span>lang<span class="token operator">/</span>Boolean<span class="token punctuation">]</span>
    ALOAD <span class="token number">2</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Boolean<span class="token punctuation">.</span>booleanValue <span class="token operator">(</span><span class="token operator">)</span>Z
    IRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">4</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">3</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0xA</span>
  <span class="token operator">/</span><span class="token operator">/</span> signature <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">;</span><span class="token operator">)</span>Z
  <span class="token operator">/</span><span class="token operator">/</span> declaration<span class="token operator">:</span> boolean auditSubclass<span class="token operator">(</span>java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">)</span>
  private static auditSubclass<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span><span class="token operator">)</span>Z
   L0
    LINENUMBER <span class="token number">1666</span> L0
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span><span class="token number">1</span>
    DUP
    ALOAD <span class="token number">0</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span><span class="token number">1</span><span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">;</span><span class="token operator">)</span>V
    INVOKESTATIC java<span class="token operator">/</span>security<span class="token operator">/</span>AccessController<span class="token punctuation">.</span>doPrivileged <span class="token operator">(</span>Ljava<span class="token operator">/</span>security<span class="token operator">/</span>PrivilegedAction<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span>
    CHECKCAST java<span class="token operator">/</span>lang<span class="token operator">/</span>Boolean
    ASTORE <span class="token number">1</span>
   L1
    LINENUMBER <span class="token number">1689</span> L1
    ALOAD <span class="token number">1</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Boolean<span class="token punctuation">.</span>booleanValue <span class="token operator">(</span><span class="token operator">)</span>Z
    IRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">3</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x10A</span>
  private static native dumpThreads<span class="token operator">(</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span><span class="token operator">)</span><span class="token punctuation">[</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x10A</span>
  private static native getThreads<span class="token operator">(</span><span class="token operator">)</span><span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public getId<span class="token operator">(</span><span class="token operator">)</span>J
   L0
    LINENUMBER <span class="token number">1705</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>tid <span class="token operator">:</span> J
    LRETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public getState<span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>State<span class="token operator">;</span>
   L0
    LINENUMBER <span class="token number">1817</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>threadStatus <span class="token operator">:</span> I
    INVOKESTATIC sun<span class="token operator">/</span>misc<span class="token operator">/</span>VM<span class="token punctuation">.</span>toThreadState <span class="token operator">(</span>I<span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>State<span class="token operator">;</span>
    ARETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x9</span>
  public static setDefaultUncaughtExceptionHandler<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">1898</span> L0
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>System<span class="token punctuation">.</span>getSecurityManager <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token operator">;</span>
    ASTORE <span class="token number">1</span>
   L1
    LINENUMBER <span class="token number">1899</span> L1
    ALOAD <span class="token number">1</span>
    IFNULL L2
   L3
    LINENUMBER <span class="token number">1900</span> L3
    ALOAD <span class="token number">1</span>
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission
    DUP
    LDC <span class="token string">&quot;setDefaultUncaughtExceptionHandler&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">.</span>checkPermission <span class="token operator">(</span>Ljava<span class="token operator">/</span>security<span class="token operator">/</span>Permission<span class="token operator">;</span><span class="token operator">)</span>V
   L2
    LINENUMBER <span class="token number">1905</span> L2
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>SecurityManager<span class="token punctuation">]</span>
    ALOAD <span class="token number">0</span>
    PUTSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>defaultUncaughtExceptionHandler <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span>
   L4
    LINENUMBER <span class="token number">1906</span> L4
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">4</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x9</span>
  public static getDefaultUncaughtExceptionHandler<span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span>
   L0
    LINENUMBER <span class="token number">1917</span> L0
    GETSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>defaultUncaughtExceptionHandler <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span>
    ARETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public getUncaughtExceptionHandler<span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span>
   L0
    LINENUMBER <span class="token number">1930</span> L0
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>uncaughtExceptionHandler <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span>
    IFNULL L1
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>uncaughtExceptionHandler <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span>
    GOTO L2
   L1
   FRAME SAME
    ALOAD <span class="token number">0</span>
    GETFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>group <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ThreadGroup<span class="token operator">;</span>
   L2
   FRAME SAME1 java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler
    ARETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">1</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x1</span>
  public setUncaughtExceptionHandler<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">1950</span> L0
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>checkAccess <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">1951</span> L1
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    PUTFIELD java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>uncaughtExceptionHandler <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span>
   L2
    LINENUMBER <span class="token number">1952</span> L2
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x2</span>
  private dispatchUncaughtException<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">1959</span> L0
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>getUncaughtExceptionHandler <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token operator">;</span>
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">1</span>
    INVOKEINTERFACE java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">$</span>UncaughtExceptionHandler<span class="token punctuation">.</span>uncaughtException <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token operator">;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Throwable<span class="token operator">;</span><span class="token operator">)</span>V <span class="token operator">(</span>itf<span class="token operator">)</span>
   L1
    LINENUMBER <span class="token number">1960</span> L1
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">3</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x8</span>
  <span class="token operator">/</span><span class="token operator">/</span> signature <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ref<span class="token operator">/</span>ReferenceQueue<span class="token operator">&lt;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">;</span><span class="token operator">&gt;</span><span class="token operator">;</span>Ljava<span class="token operator">/</span>util<span class="token operator">/</span>concurrent<span class="token operator">/</span>ConcurrentMap<span class="token operator">&lt;</span><span class="token operator">+</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ref<span class="token operator">/</span>WeakReference<span class="token operator">&lt;</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Class<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">;</span><span class="token operator">&gt;</span><span class="token operator">;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">;</span><span class="token operator">)</span>V
  <span class="token operator">/</span><span class="token operator">/</span> declaration<span class="token operator">:</span> void processQueue<span class="token operator">(</span>java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>ref<span class="token punctuation">.</span>ReferenceQueue<span class="token operator">&lt;</span>java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>ConcurrentMap<span class="token operator">&lt;</span><span class="token operator">?</span> extends java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>ref<span class="token punctuation">.</span>WeakReference<span class="token operator">&lt;</span>java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">)</span>
  static processQueue<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ref<span class="token operator">/</span>ReferenceQueue<span class="token operator">;</span>Ljava<span class="token operator">/</span>util<span class="token operator">/</span>concurrent<span class="token operator">/</span>ConcurrentMap<span class="token operator">;</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">1971</span> L0
   FRAME SAME
    ALOAD <span class="token number">0</span>
    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span>ref<span class="token operator">/</span>ReferenceQueue<span class="token punctuation">.</span>poll <span class="token operator">(</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>ref<span class="token operator">/</span>Reference<span class="token operator">;</span>
    DUP
    ASTORE <span class="token number">2</span>
    IFNULL L1
   L2
    LINENUMBER <span class="token number">1972</span> L2
    ALOAD <span class="token number">1</span>
    ALOAD <span class="token number">2</span>
    INVOKEINTERFACE java<span class="token operator">/</span>util<span class="token operator">/</span>concurrent<span class="token operator">/</span>ConcurrentMap<span class="token punctuation">.</span>remove <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span><span class="token operator">)</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span> <span class="token operator">(</span>itf<span class="token operator">)</span>
    POP
    GOTO L0
   L1
    LINENUMBER <span class="token number">1974</span> L1
   FRAME APPEND <span class="token punctuation">[</span>java<span class="token operator">/</span>lang<span class="token operator">/</span>ref<span class="token operator">/</span>Reference<span class="token punctuation">]</span>
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">2</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">3</span>

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x102</span>
  private native setPriority0<span class="token operator">(</span>I<span class="token operator">)</span>V

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x102</span>
  private native stop0<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>Object<span class="token operator">;</span><span class="token operator">)</span>V

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x102</span>
  private native suspend0<span class="token operator">(</span><span class="token operator">)</span>V

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x102</span>
  private native resume0<span class="token operator">(</span><span class="token operator">)</span>V

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x102</span>
  private native interrupt0<span class="token operator">(</span><span class="token operator">)</span>V

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x102</span>
  private native setNativeName<span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V

  <span class="token operator">/</span><span class="token operator">/</span> access flags <span class="token number">0x8</span>
  static <span class="token operator">&lt;</span>clinit<span class="token operator">&gt;</span><span class="token operator">(</span><span class="token operator">)</span>V
   L0
    LINENUMBER <span class="token number">145</span> L0
    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>registerNatives <span class="token operator">(</span><span class="token operator">)</span>V
   L1
    LINENUMBER <span class="token number">1497</span> L1
    ICONST_0
    ANEWARRAY java<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement
    PUTSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>EMPTY_STACK_TRACE <span class="token operator">:</span> <span class="token punctuation">[</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>StackTraceElement<span class="token operator">;</span>
   L2
    LINENUMBER <span class="token number">1623</span> L2
    NEW java<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission
    DUP
    LDC <span class="token string">&quot;enableContextClassLoaderOverride&quot;</span>
    INVOKESPECIAL java<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission<span class="token punctuation">.</span><span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token operator">(</span>Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>String<span class="token operator">;</span><span class="token operator">)</span>V
    PUTSTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span>Thread<span class="token punctuation">.</span>SUBCLASS_IMPLEMENTATION_PERMISSION <span class="token operator">:</span> Ljava<span class="token operator">/</span>lang<span class="token operator">/</span>RuntimePermission<span class="token operator">;</span>
    RETURN
    MAXSTACK <span class="token operator">=</span> <span class="token number">3</span>
    MAXLOCALS <span class="token operator">=</span> <span class="token number">0</span>
<span class="token operator">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="创建方式" tabindex="-1"><a class="header-anchor" href="#创建方式" aria-hidden="true">#</a> 创建方式</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span>  <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前线程：&quot;</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token class-name">MyThread</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
m<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 	<span class="token comment">// 启动线程</span>


说明：
<span class="token number">1.</span> 继承<span class="token class-name">Thread</span>类，重写run方法；
<span class="token number">2.</span> 使用时，直接构造一个实例对象，然后调用start方法进行启动；

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前线程：&quot;</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token class-name">MyRunnable</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//启动线程</span>

说明：
<span class="token number">1.</span> 实现<span class="token class-name">Runnable</span>接口，并实现run方法；
<span class="token number">2.</span> 使用时，直接构造<span class="token class-name">Thread</span>对象，然后调用start方法进行启动；

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyCallable</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前线程：&quot;</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;运行结果：&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> future <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyCallable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>future<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;结果为： &quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

说明：
<span class="token number">1.</span> 实现<span class="token class-name">Callable</span>接口中的call方法，并且<span class="token class-name">Callable</span>接口带有一个泛型参数，这个泛型参数表示：返回值的类型；
<span class="token number">2.</span> 使用时，先构造一个<span class="token class-name">FutureTask</span>对象来接收返回值，之后构造一个<span class="token class-name">Thread</span>对象，最后调用start方法进行启动；
<span class="token number">3.</span> 获取结果时，通过<span class="token class-name">FutureTask</span>对象的get方法进行获取，获取过程为阻塞获取；

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 线程池构造方法</span>
<span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
    <span class="token annotation punctuation">@Range</span><span class="token punctuation">(</span>from <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">to</span> <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span>  <span class="token keyword">int</span> corePoolSize<span class="token punctuation">,</span>
    <span class="token annotation punctuation">@Range</span><span class="token punctuation">(</span>from <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">to</span> <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span>  <span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">,</span>
    <span class="token annotation punctuation">@Range</span><span class="token punctuation">(</span>from <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">to</span> <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span>  <span class="token keyword">long</span> keepAliveTime<span class="token punctuation">,</span>
    <span class="token annotation punctuation">@NotNull</span>  <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">,</span>
    <span class="token annotation punctuation">@NotNull</span>  <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span> workQueue<span class="token punctuation">,</span>
    <span class="token annotation punctuation">@NotNull</span>  <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span>
    <span class="token annotation punctuation">@NotNull</span>  <span class="token class-name">RejectedExecutionHandler</span> handler <span class="token punctuation">)</span>
<span class="token class-name">Creates</span> a <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span> <span class="token keyword">with</span> <span class="token namespace">the</span> given initial parameters<span class="token punctuation">.</span>

<span class="token comment">/*
Params:
    corePoolSize – the number of threads to keep in the pool, even if they are idle, unless allowCoreThreadTimeOut is set
    maximumPoolSize – the maximum number of threads to allow in the pool
    keepAliveTime – when the number of threads is greater than the core, this is the maximum time that excess idle threads will wait for new tasks before terminating.
    unit – the time unit for the keepAliveTime argument
    workQueue – the queue to use for holding tasks before they are executed. This queue will hold only the Runnable tasks submitted by the execute method.
    threadFactory – the factory to use when the executor creates a new thread
    handler – the handler to use when execution is blocked because the thread bounds and queue capacities are reached

Throws:
    IllegalArgumentException – if one of the following holds:
        corePoolSize &lt; 0
        keepAliveTime &lt; 0
        maximumPoolSize &lt;= 0
        maximumPoolSize &lt; corePoolSize
    NullPointerException – if workQueue or threadFactory or handler is null
*/</span>

<span class="token comment">// 示例</span>








</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意： <ul><li>run 方法中执行的代码一般被成为“任务”；</li><li><strong>线程的使用都是通过构造 Thread 对象来完成的；</strong></li></ul></li><li>比较异同： <ul><li>方式 1 和方式 2 都不能获取返回值；</li><li>Java 支持单继承和多实现，所以方式 2 可以避免单继承的局限性；</li><li>方式 3 可以获取任务返回值，并且可以捕获任务执行过程中抛出的异常；</li><li>方式 1、2、3 都不能控制资源，因为如果有多项任务，就要开多个线程，这就相当于“公司有一项任务就要专门招一个员工来干活儿”，而方式 4 可以控制资源，这种方式就相当于“公司固定几个员工，公司里的各项任务让这些员工依次完成”；实际开发中，方式 4 才是最常用的；</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThreadTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ThreadPoolExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token number">200</span><span class="token punctuation">,</span>
            <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">defaultThreadFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>AbortPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ExecutionException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

        <span class="token comment">// test();</span>
        <span class="token comment">// corePoolSize – the number of threads to keep in the pool, even if they are idle,</span>
        <span class="token comment">// unless allowCoreThreadTimeOut is set</span>
        executor<span class="token punctuation">.</span><span class="token function">allowCoreThreadTimeOut</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1. 使用 execute 执行 Thread 类型的任务；</span>
        executor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Thread01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 使用 execute 执行 Runable 类型的任务；</span>
        executor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runable01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 不能使用 execute 执行 Callable 类型的任务；</span>
        <span class="token comment">// executor.execute(new Callable01());     // 报编译错误</span>

        <span class="token comment">// 3. 使用 submit 提交 Runable 类型的任务</span>
        executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Thread01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4. 使用 submit 提交 Runable 类型的任务；</span>
        executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runable01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 5. 使用 submit 提交有 返回值的 Callable 类型的任务</span>
        <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> submit <span class="token operator">=</span> executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Callable01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> result <span class="token operator">=</span> submit<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ExecutionException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 1. 使用： public Thread(Runnable target) 构造函数；
         *  由于 Runnable 是一个 @FunctionalInterface 标注的接口，而这个注解的作用：
         *      标记Runnable接口是一个“函数式接口”。在Java中，“函数式接口”是有且仅有一个抽象方法的接口。
         *      反过来说，如果一个接口中包含两个或两个以上的抽象方法，就不能使用 @FunctionalInterface 注解，否则编译会报错。
         */</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前线程：&quot;</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;运行结果：&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用的是 public Thread(Runnable target) 构造函数</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Thread01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用的是 public Thread(Runnable target) 构造函数</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runable01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用的是 public Thread(Runnable target) 构造函数</span>
        <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Callable01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 阻塞获取，可以获取正常结果，也可以捕获异常；</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Thread01</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前线程：&quot;</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;运行结果：&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Runable01</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前线程：&quot;</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;运行结果：&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Callable01</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前线程：&quot;</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;运行结果：&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程状态" tabindex="-1"><a class="header-anchor" href="#线程状态" aria-hidden="true">#</a> 线程状态</h3><blockquote><p>事实上，可以把线程看作是一个“任务”，为了把“大任务 ” 划分成“小任务”，于是就产生了“线程状态”的概念。 试想，有了这些线程状态的概念后，我们是不是就可以基于这些概念，开发出一套框架，在框架里面搞一套调度系统，再搞一套队列，这就是 ExecuteService 的核心思想。</p></blockquote><p><img src="`+c+'" alt="image.png" loading="lazy"> Thread 的构造方法： 因此，在构造时，只能传入 Runnable 类型的对象实例</p><figure><img src="'+i+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li>状态转化</li></ul><figure><img src="'+u+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="线程的操作方法" tabindex="-1"><a class="header-anchor" href="#线程的操作方法" aria-hidden="true">#</a> 线程的操作方法</h3><figure><img src="'+d+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="'+v+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>Object 中的方法</p><figure><img src="'+k+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>Condition</p><figure><img src="'+m+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><hr><h3 id="为什么要使用线程池" tabindex="-1"><a class="header-anchor" href="#为什么要使用线程池" aria-hidden="true">#</a> 为什么要使用线程池？</h3><p>直接 new 一个线程真的不香，原因主要在于创建大量相同的线程会大量的消耗系统内存，甚至会导致系统内存耗尽；同时，大量的线程会竞争 CPU 的调度，导致 CPU 过度切换。在阿里巴巴 java 开发手册中也有提到过为什么不提倡使用单个线程的原因，就是在于上面这两个原因。</p><p>那么使用线程池的优点是什么呢？使用线程池有以下几方面的优点：</p><ol><li><strong>减少系统开销</strong>。减少在创建和销毁线程上所花费的时间和系统资源的开销</li><li><strong>提高响应速度</strong>。当任务到达之后，任务可以不需要等到线程创建就能被立即执行</li><li><strong>提高线程的可管理性</strong>。线程是稀缺资源，如果无限制的的创建，不仅会消耗系统资源，还会降低系统性能，使用线程池可以进行统一分配，调优和监控。</li></ol><h3 id="java-中标准构造器创建线程池的方式" tabindex="-1"><a class="header-anchor" href="#java-中标准构造器创建线程池的方式" aria-hidden="true">#</a> java 中标准构造器创建线程池的方式</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
   <span class="token keyword">int</span> corePoolSize<span class="token punctuation">,</span>
   <span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">,</span>
   <span class="token keyword">long</span> keepAliveTime<span class="token punctuation">,</span>
   <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">,</span>
   <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span> workQueue<span class="token punctuation">,</span>
   <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span>
   <span class="token class-name">RejectedExecutionHandler</span> handler<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参数讲解及运行原理 <ul><li><code>corePoolSize：</code> 核心线程数。除非设置了 <strong>_allowCoreThreadTimeOut _</strong>，否则一直线程一直存在。</li><li><code>maximumPoolSize：</code> 最大线程数。</li><li><code>keepAliveTime：</code> 空闲线程存活时间。</li><li><code>unit：</code> 空闲线程存活时间单位。</li><li><code>workQueue：</code> 阻塞队列。<strong><em>用来存储等待执行的任务，如果当前对线程的需求超过了 corePoolSize 大小，就会放在这里等待空闲线程执行</em></strong><ul><li><code>LinkedBlockingQueue</code> ： 是一个基于链表实现的阻塞队列，按 FIFO 排序任务，可以设置容量（有界队列），不设置容量则默认使用 Integer.Max_VALUE 作为容量（无界队列）。该队列的吞吐量高于 ArrayBlockingQueue。 有两个快捷创建线程池的工厂方法 Executors.newSingleThreadExecutor 和 Executors.newFixedThreadPool 使用了这个队列，并且都没有设置容量（无界队列）。</li><li><code>ArrayBlockingQueue</code> ： 是一个数组实现的有界阻塞队列（有界队列），队列中的元素按 FIFO 排序。ArrayBlockingQueue 在创建时必须设置大小。</li><li><code>SynchronousQueue</code> ： （同步队列）是一个不存储元素的阻塞队列，每个插入操作必须等到另一个线程的调用移除操作，否则插入操作一直处于阻塞状态，其吞吐量通常高于 LinkedBlockingQueue 。快捷工 厂方法 Executors.newCachedThreadPool 所创建的线程池使用此队列。与前面的队列相比，这个队列比较特殊，它不会保存提交的任务，而是直接新建一个线程来执行新来的任务。</li><li><code>PriorityBlockingQueue</code> ：是具有优先级的无界队列。</li><li><code>DelayQueue</code> ：这是一个无界阻塞延迟队列，底层基于 PriorityBlockingQueue 实现，队列中每个元素都有过期时间，当从队列 获取元素（元素出队）时，只有已经过期的元素才会出队，队列头部的 元素是过期最快的元素。快捷工厂方法 Executors.newScheduledThreadPool 所创建的线程池使用此队列。</li></ul></li><li><code>threadFactory：</code> 创建线程的线程工厂。当线程池需要新的线程时，会用 threadFactory 来生成新的线程；</li><li><code>handler：</code> 拒绝策略。 <ul><li>AbortPolicy ： 使用该策略时，如果线程池队列满了，新任务就会被拒绝，并且抛 出 RejectedExecutionException 异常。该策略是线程池默认的拒绝策略。</li><li>DiscardPolicy ： 该策略是 AbortPolicy 的 Silent（安静）版本，如果线程池队列满 了，新任务就会直接被丢掉，并且不会有任何异常抛出。</li><li>DiscardOldestPolicy ： 抛弃最老任务策略，也就是说如果队列满了，就会将最早进入队列的任务抛弃，从队列中腾出空间，再尝试加入队列。因为队列是队尾进队头出，队头元素是最老的，所以每次都是移除队头元素后再尝试入队。</li><li>CallerRunsPolicy ： 调用者执行策略。在新任务被添加到线程池时，如果添加失败，那 么提交任务线程会自己去执行该任务，不会使用线程池中的线程去执行 新任务。在以上 4 种内置策略中，线程池默认的拒绝策略为 AbortPolicy，如 果提交的任务被拒绝，线程池就会抛出 RejectedExecutionException 异 常，该异常是非受检异常（运行时异常），很容易忘记捕获。如果关心 任务被拒绝的事件，需要在提交任务时捕获 RejectedExecutionException 异常。</li><li>自定义策略 ： 如果以上拒绝策略都不符合需求，那么可自定义一个拒绝策略，实 现 RejectedExecutionHandler 接口的 rejectedExecution 方法即可。</li></ul></li></ul></li><li>运行原理 <ul><li>线程池初始化时并没有线程，当来临任务时，开始创建一个线程，如果任务还是不能被及时的完成，就接着创建，直到达到核心线程数。（一旦创建的达到核心线程数后，就会永驻内存，但是要注意并不是指创建线程初期的线程就是核心线程，超过核心线程数之后创建的线程也有可能成为核心线程，最开始创建的线程有可能被销毁）；</li><li>如果创建了核心线程数大小的线程后依然有任务涌来，那就把这些任务放到阻塞队列中；</li><li>如果阻塞队列满了，依然有任务涌来，那么就接着创建线程，直到达到最大线程数；</li><li>如果达到最大线程数后，还有任务涌来，那么就执行拒绝策略；</li><li>如果任务执行完成之后，线程池会根据空闲线程存活时间对创建的线程进行销毁，直到线程数量等于核心线程数为止；</li></ul></li><li>线程池的操作方法 <ul><li>**提交任务 ** <ul><li>**execute() ** <ul><li>void execute(Runnable command);</li></ul></li><li><strong>submit()</strong></li></ul></li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">submit</span><span class="token punctuation">(</span><span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> task<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">submit</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> task<span class="token punctuation">,</span> <span class="token class-name">T</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">submit</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> task<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>  - 二者区别
     - 接受参数不同
     - submit()提交任务后会有返回值，而execute()没有
     - submit()方便Exception处理
</code></pre><ul><li><strong>钩子方法</strong></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//任务执行之前的钩子方法（前钩子）</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">beforeExecute</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">,</span> <span class="token class-name">Runnable</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token comment">//任务执行之后的钩子方法（后钩子）</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">afterExecute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token comment">//线程池终止时的钩子方法（停止钩子）</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">terminated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>优雅关闭 <ul><li><strong>shutdown</strong> ： 是 JUC 提供的一个有序关闭线程池的方法，此方法 会等待当前工作队列中的剩余任务全部执行完成之后，才会执行关闭， 但是此方法被调用之后线程池的状态转为 SHUTDOWN，线程池不会再 接收新的任务。</li><li><strong>shutdownNow</strong> ： 是 JUC 提供的一个立即关闭线程池的方法，此 方法会打断正在执行的工作线程，并且会清空当前工作队列中的剩余任 务，返回的是尚未执行的任务。</li><li><strong>awaitTermination</strong> ： 等待线程池完成关闭。在调用线程池的 shutdown()与 shutdownNow()方法时，当前线程会立即返回，不会一直等 待直到线程池完成关闭。如果需要等到线程池关闭完成，可以调用 awaitTermination()方法。</li></ul></li></ul><h3 id="java-中快捷工厂创建线程池方式" tabindex="-1"><a class="header-anchor" href="#java-中快捷工厂创建线程池方式" aria-hidden="true">#</a> java 中快捷工厂创建线程池方式</h3><ul><li>出现这种方式的背景： 正是由于线程池的标准创建模式参数较多，使用时需要对线程池原理了解较深才能熟练使用，因此 juc 包中又提供了一种快捷创建线程池的方式，这种方式就是快捷工厂创建线程池方式。</li><li>快捷创建方式 <ul><li>Executors.<strong>newSingleThreadExecutor</strong>()</li><li>Executors.<strong>newFixedThreadPool</strong>(int threads)</li><li>Executors.<strong>newCachedThreadPool</strong>()</li><li>Executors.<strong>newScheduledThreadPool</strong>(int corePoolSize)</li></ul></li></ul><h3 id="两种方式优劣" tabindex="-1"><a class="header-anchor" href="#两种方式优劣" aria-hidden="true">#</a> 两种方式优劣</h3><p>快捷工厂创建线程池的方式是不建议使用的，因为有些方式使用的是无界队列，这会导致内存溢出。推荐使用原生方式。</p><h3 id="java-中线程池框架" tabindex="-1"><a class="header-anchor" href="#java-中线程池框架" aria-hidden="true">#</a> java 中线程池框架</h3><figure><img src="`+b+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="'+L+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="'+g+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><blockquote><p>ThreadPoolExecutor 和 ScheduledThreadPoolExecutor 算是我们最常用的线程池类了，从上面我们可以看到这俩个最终都实现了 Executor 和 ExecutorService 这两个接口，实际上主要的接口定义都是在 ExecutorService 中。</p></blockquote><h3 id="线程池的线程数选取" tabindex="-1"><a class="header-anchor" href="#线程池的线程数选取" aria-hidden="true">#</a> 线程池的线程数选取</h3><ul><li>IO 密集型任务 ： 此类任务主要是执行 IO 操作。由于执行 IO 操作的时间较长，导致 CPU 的利用率不高，这类任务 CPU 常处于空闲状态。Netty 的 IO 读写操作 为此类任务的典型例子。 <ul><li>通常需要开 CPU 核心数两倍的线程。</li></ul></li><li>CPU 密集型任务 ： 此类任务主要是执行计算任务。由于响应时间很快，CPU 一直在运 行，这种任务 CPU 的利用率很高。 <ul><li>线程数等于 CPU 数就行</li></ul></li><li>混合型任务 ： 此类任务既要执行逻辑计算，又要进行 IO 操作（如 RPC 调用、数据 库访问）。相对来说，由于执行 IO 操作的耗时较长（一次网络往返往往 在数百毫秒级别），这类任务的 CPU 利用率也不是太高。Web 服务器的 HTTP 请求处理操作为此类任务的典型例子。 <ul><li>最佳线程数目 = (线程等待时间与线程占用 CPU 时间之比 + 1) * CPU 核数</li></ul></li></ul><h3 id="线程池结合-springboot-使用" tabindex="-1"><a class="header-anchor" href="#线程池结合-springboot-使用" aria-hidden="true">#</a> 线程池结合 SpringBoot 使用</h3><ul><li>方式一：通过@Async 注解调用 <ul><li>在 Application 启动类上面加上<a href="/EnableAsync">@EnableAsync </a></li><li>在需要异步执行的方法上加上@Async 注解</li></ul></li><li>方式二：使用自定义的线程池 <ul><li>自定义 Configuration</li></ul></li></ul><h3 id="线程池配置类" tabindex="-1"><a class="header-anchor" href="#线程池配置类" aria-hidden="true">#</a> 线程池配置类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ThreadPoolUtil {
    private static int corePoolSize = 5;
    private static int maxPollSize = 5;
    private static long keepAliveTime = 10;
    private stativ TimeUnit unit = TimeUnit.MINUTES;

    private static class Pool{
        private static ThreadPoolExecutor executor = new ThreadPoolExecutor(
            corePoolSize,
            maxPollSize,
            keepAliveTime,
            unit,
            new LinkedBlockingQueue&lt;&gt;(),
            r -&gt; new Thread(r, &quot;async-thread&quot;),
            new ThreadPoolExecutor.CallerRunsPolicy()
        );
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ThreadPoolUtil.submitTask(
    ()-&gt;{
        // 你的任务方法；
    }
);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他方法" tabindex="-1"><a class="header-anchor" href="#其他方法" aria-hidden="true">#</a> 其他方法</h3>`,56),T={href:"https://mp.weixin.qq.com/s/skBA9RwVBLnw8BYZhcUSrA",target:"_blank",rel:"noopener noreferrer"},N=s('<hr><h3 id="任务编排-completablefuture" tabindex="-1"><a class="header-anchor" href="#任务编排-completablefuture" aria-hidden="true">#</a> 任务编排-CompletableFuture</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> todo</label></li></ul><ol><li></li><li></li><li><p>Future 与 FutureTask 出现的背景以及其产生的问题；</p><ol><li>get 方法是一个阻塞方法，不符合我们异步的业务需求；</li><li>虽然可以配合线程池的方式来异步执行多个任务，但是</li></ol></li><li><p>CompletableFuture 出现的背景；</p><ol><li>零元依赖</li><li>一元依赖；</li><li>二元依赖；</li><li>多元依赖；</li></ol></li><li><p>基本原理；</p></li><li><p>最佳实践；</p></li><li><p>如何学些此部分内容； 1.</p></li></ol><p>以 pdf 中的为例；</p><p>构造一个 CompletableFuture 对象，runAsync 没有返回值；supplyAsync 有返回值；</p><ul><li><code>static CompletableFuture&lt;Void&gt; runAsync(Runnable runnable)</code>：异步执行指定的<code>Runnable</code>任务。</li><li><code>static CompletableFuture&lt;Void&gt; runAsync(Runnable runnable, Executor executor)</code>：在指定的<code>Executor</code>上异步执行<code>Runnable</code>任务。</li><li><code>static &lt;U&gt; CompletableFuture&lt;U&gt; supplyAsync(Supplier&lt;U&gt; supplier)</code>：异步执行指定的<code>Supplier</code>任务，并返回<code>CompletableFuture</code>对象，该对象在计算完成时将提供结果。</li><li><code>static &lt;U&gt; CompletableFuture&lt;U&gt; supplyAsync(Supplier&lt;U&gt; supplier, Executor executor)</code>：在指定的<code>Executor</code>上异步执行<code>Supplier</code>任务，并返回一个<code>CompletableFuture</code>对象，该对象在计算完成时将提供结果。</li></ul><p>thenApply 方法：当一个线程依赖另一个线程时，获取上一个任务返回的结果，并返回当前 任务的返回值。 thenAccept 方法：消费处理结果。接收任务的处理结果，并消费处理，无返回结果。 thenRun 方法：只要上面的任务执行完成，就开始执行 thenRun，只是处理完任务后，执行 thenRun 的后续操作</p><ul><li><p><code>CompletableFuture&lt;T&gt; thenApply(Function&lt;? super T,? extends U&gt; fn)</code>：当此 <code>CompletableFuture</code> 完成时，使用此 <code>CompletableFuture</code> 的结果作为参数应用给定的函数。</p></li><li><p><code>CompletableFuture&lt;T&gt; thenApplyAsync(Function&lt;? super T,? extends U&gt; fn)</code>：当此 <code>CompletableFuture</code> 完成时，异步地应用给定的函数。</p></li><li><p><code>CompletableFuture&lt;T&gt; thenApplyAsync(Function&lt;? super T,? extends U&gt; fn, Executor executor)</code>：当此 CompletableFuture 完成时，使用指定的 Executor 异步地应用给定的函数。</p></li><li><p><code>CompletableFuture&lt;Void&gt; thenAccept(Consumer&lt;? super T&gt; action)</code>：当此 <code>CompletableFuture</code> 完成时，对其结果执行给定的操作。</p></li><li><p><code>CompletableFuture&lt;Void&gt; thenAcceptAsync(Consumer&lt;? super T&gt; action)</code>：当此 <code>CompletableFuture</code> 完成时，异步地对其结果执行给定的操作。</p></li><li><p><code>CompletableFuture&lt;Void&gt; thenAcceptAsync(Consumer&lt;? super T&gt; action, Executor executor)</code>：当此 <code>CompletableFuture</code> 完成时，使用指定的 Executor 异步地对其结果执行给定的操作。</p></li><li><p><code>CompletableFuture&lt;Void&gt; thenRun(Runnable action)</code>：当此 <code>CompletableFuture</code> 完成时，执行给定的操作。</p></li><li><p><code>CompletableFuture&lt;Void&gt; thenRunAsync(Runnable action)</code>：当此 <code>CompletableFuture</code> 完成时，异步地执行给定的操作。</p></li><li><p><code>CompletableFuture&lt;Void&gt; thenRunAsync(Runnable action, Executor executor)</code>：当此 <code>CompletableFuture</code> 完成时，使用指定的 <code>Executor</code> 异步地执行给定的操作。</p></li></ul><p>不可改变返回值</p><ul><li><code>CompletableFuture&lt;T&gt; **whenComplete**(BiConsumer&lt;? super T,? super Throwable&gt; action)</code>：当此 <code>CompletableFuture</code> 完成时，对结果或异常执行给定的操作。</li><li><code>CompletableFuture&lt;T&gt; **whenCompleteAsync**(BiConsumer&lt;? super T,? super Throwable&gt; action)</code>：当此 <code>CompletableFuture</code> 完成时，异步地对结果或异常执行给定的操作。</li><li><code>CompletableFuture&lt;T&gt; **whenCompleteAsync**(BiConsumer&lt;? super T,? super Throwable&gt; action, Executor executor)</code>：当此 <code>CompletableFuture</code> 完成时，使用指定的 <code>Executor</code> 异步地对结果或异常执行给定的操作。</li></ul><p>可以改变返回值</p><ul><li><code>CompletableFuture&lt;U&gt; handle(BiFunction&lt;? super T,Throwable,? extends U&gt; fn)</code>：当此 <code>CompletableFuture</code> 完成时，执行给定的函数。</li><li><code>CompletableFuture&lt;U&gt; handleAsync(BiFunction&lt;? super T,Throwable,? extends U&gt; fn)</code>：当此 <code>CompletableFuture</code> 完成时，异步地执行给定的函数。</li><li><code>CompletableFuture&lt;U&gt; handleAsync(BiFunction&lt;? super T,Throwable,? extends U&gt; fn, Executor executor)</code>：当此 <code>CompletableFuture</code> 完成时，使用指定的 Executor 异步地执行给定的函数。</li><li><code>CompletableFuture&lt;T&gt; **exceptionally**(Function&lt;Throwable,? extends T&gt; fn)</code>：当 <code>CompletableFuture</code> 遇到异常时，执行给定的函数。</li></ul><p>thenCompose：TODO thenCombine：组合两个 future，获取两个 future 的返回结果，并返回当前任务的返回值 thenAcceptBoth：组合两个 future，获取两个 future 任务的返回结果，然后处理任务，没有返回值。 runAfterBoth：组合两个 future，不需要获取 future 的结果，只需两个 future 处理完任务后，处理该任务。</p><ul><li><code>CompletableFuture&lt;T&gt; thenCompose(Function&lt;? super T,? extends CompletionStage&lt;U&gt;&gt; fn)</code>：当此 <code>CompletableFuture</code> 完成时，使用此 <code>CompletableFuture</code> 的结果作为参数应用给定的函数，并返回一个新的 <code>CompletableFuture</code>。</li><li><code>CompletableFuture&lt;T&gt; thenComposeAsync(Function&lt;? super T,? extends CompletionStage&lt;U&gt;&gt; fn)</code>：当此 <code>CompletableFuture</code> 完成时，异步地应用给定的函数。</li><li><code>CompletableFuture&lt;T&gt; thenComposeAsync(Function&lt;? super T,? extends CompletionStage&lt;U&gt;&gt; fn, Executor executor)</code>：当此 <code>CompletableFuture</code> 完成时，使用指定的 <code>Executor</code> 异步地应用给定的函数。</li><li><code>CompletableFuture&lt;Void&gt; thenCombine(CompletionStage&lt;? extends U&gt; other, BiConsumer&lt;? super T,? super U&gt; action)</code>：当此 <code>CompletableFuture</code> 和另一个 <code>CompletableFuture</code> 完成时，执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; thenCombineAsync(CompletionStage&lt;? extends U&gt; other, BiConsumer&lt;? super T,? super U&gt; action)</code>：当此 <code>CompletableFuture</code> 和另一个 <code>CompletableFuture</code> 完成时，异步地执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; thenCombineAsync(CompletionStage&lt;? extends U&gt; other, BiConsumer&lt;? super T,? super U&gt; action, Executor executor)</code>：当此 CompletableFuture 和另一个 <code>CompletableFuture</code> 完成时，使用指定的 <code>Executor</code> 异步地执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; thenAcceptBoth(CompletionStage&lt;? extends U&gt; other, BiConsumer&lt;? super T,? super U&gt; action)</code>：当此 <code>CompletableFuture</code> 和另一个 <code>CompletableFuture</code> 都完成时，执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; thenAcceptBothAsync(CompletionStage&lt;? extends U&gt; other, BiConsumer&lt;? super T,? super U&gt; action)</code>：当此 <code>CompletableFuture</code> 和另一个 <code>CompletableFuture</code> 都完成时，异步地执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; thenAcceptBothAsync(CompletionStage&lt;? extends U&gt; other, BiConsumer&lt;? super T,? super U&gt; action, Executor executor)</code>：当此 <code>CompletableFuture</code> 和另一个 <code>CompletableFuture</code> 都完成时，使用指定的 <code>Executor</code> 异步地执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; runAfterBoth(CompletionStage&lt;?&gt; other, Runnable action)</code>：当此 <code>CompletableFuture</code> 和另一个 <code>CompletableFuture</code> 都完成时，执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; runAfterBothAsync(CompletionStage&lt;?&gt; other, Runnable action)</code>：当此 <code>CompletableFuture</code> 和另一个 <code>CompletableFuture</code> 都完成时，异步地执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; runAfterBothAsync(CompletionStage&lt;?&gt; other, Runnable action, Executor executor)</code>：当此 <code>CompletableFuture</code> 和另一个 <code>CompletableFuture</code> 都完成时，使用指定的 <code>Executor</code> 异步地执行给定的操作。</li></ul><p>acceptEither：两个任务有一个执行完成，获取它的返回值，处理任务，没有新的返回值。 applyToEither：两个任务有一个执行完成，获取它的返回值，处理任务并有新的返回值。<br> runAfterEither：两个任务有一个执行完成，不需要获取 future 的结果，处理任务，也没有返回值。</p><ul><li><code>CompletableFuture&lt;Void&gt; acceptEither(CompletionStage&lt;? extends T&gt; other, Consumer&lt;? super T&gt; action)</code>：当此 <code>CompletableFuture</code> 或另一个 <code>CompletableFuture</code> 完成时，执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; acceptEitherAsync(CompletionStage&lt;? extends T&gt; other, Consumer&lt;? super T&gt; action)</code>：当此 <code>CompletableFuture</code> 或另一个 <code>CompletableFuture</code> 完成时，异步地执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; acceptEitherAsync(CompletionStage&lt;? extends T&gt; other, Consumer&lt;? super T&gt; action, Executor executor)</code>：当此 <code>CompletableFuture</code> 或另一个 <code>CompletableFuture</code> 完成时，使用指定的 <code>Executor</code> 异步地执行给定的操作。</li><li><code>CompletableFuture&lt;U&gt; applyToEither(CompletionStage&lt;? extends T&gt; other, Function&lt;? super T,U&gt; fn)</code>：当此 <code>CompletableFuture</code> 或另一个 <code>CompletableFuture</code> 完成时，执行给定的函数。</li><li><code>CompletableFuture&lt;U&gt; applyToEitherAsync(CompletionStage&lt;? extends T&gt; other, Function&lt;? super T,U&gt; fn)</code>：当此 <code>CompletableFuture</code> 或另一个 <code>CompletableFuture</code> 完成时，异步地执行给定的函数。</li><li><code>CompletableFuture&lt;U&gt; applyToEitherAsync(CompletionStage&lt;? extends T&gt; other, Function&lt;? super T,U&gt; fn, Executor executor)</code>：当此 <code>CompletableFuture</code> 或另一个 <code>CompletableFuture</code> 完成时，使用指定的 <code>Executor</code> 异步地执行给定的函数。</li><li><code>CompletableFuture&lt;Void&gt; runAfterEither(CompletionStage&lt;?&gt; other, Runnable action)</code>：当此 <code>CompletableFuture</code> 或另一个 <code>CompletableFuture</code> 完成时，执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; runAfterEitherAsync(CompletionStage&lt;?&gt; other, Runnable action)</code>：当此 <code>CompletableFuture</code> 或另一个 <code>CompletableFuture</code> 完成时，异步地执行给定的操作。</li><li><code>CompletableFuture&lt;Void&gt; runAfterEitherAsync(CompletionStage&lt;?&gt; other, Runnable action, Executor executor)</code>：当此 <code>CompletableFuture</code> 或另一个 <code>CompletableFuture</code> 完成时，使用指定的 <code>Executor</code> 异步地执行给定的操作。</li></ul><p>allOf：等待所有任务完成 anyOf：只要有一个任务完成</p><ul><li><code>static CompletableFuture&lt;Void&gt; allOf(CompletableFuture&lt;?&gt;... cfs)</code>：返回一个新的 <code>CompletableFuture</code>，当所有传入的 <code>CompletableFuture</code> 都完成时，它也会完成。</li><li><code>static CompletableFuture&lt;Object&gt; anyOf(CompletableFuture&lt;?&gt;... cfs)</code>：返回一个新的 <code>CompletableFuture</code>，当任意一个传入的 <code>CompletableFuture</code> 完成时，它也会完成，并返回完成的 <code>CompletableFuture</code> 的结果。</li></ul>',19);function I(h,O){const a=r("ExternalLinkIcon");return p(),o("div",null,[A,n("p",null,[n("a",T,[l("https://mp.weixin.qq.com/s/skBA9RwVBLnw8BYZhcUSrA"),t(a)])]),N])}const R=e(E,[["render",I],["__file","ch04-threadandthreadpool.html.vue"]]);export{R as default};
