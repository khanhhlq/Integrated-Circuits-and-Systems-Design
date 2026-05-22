/**********************************************************************/
/*   ____  ____                                                       */
/*  /   /\/   /                                                       */
/* /___/  \  /                                                        */
/* \   \   \/                                                       */
/*  \   \        Copyright (c) 2003-2009 Xilinx, Inc.                */
/*  /   /          All Right Reserved.                                 */
/* /---/   /\                                                         */
/* \   \  /  \                                                      */
/*  \___\/\___\                                                    */
/***********************************************************************/

/* This file is designed for use with ISim build 0xfbc00daa */

#define XSI_HIDE_SYMBOL_SPEC true
#include "xsi.h"
#include <memory.h>
#ifdef __GNUC__
#include <stdlib.h>
#else
#include <malloc.h>
#define alloca _alloca
#endif
static const char *ng0 = "/home/ise/D_DRIVE/Integrated-Circuits-and-Systems-Design/counter/design.v";
static unsigned int ng1[] = {0U, 0U};
static unsigned int ng2[] = {1U, 0U};
static unsigned int ng3[] = {2U, 0U};
static unsigned int ng4[] = {3U, 0U};



static void Initial_10_0(char *t0)
{
    char *t1;
    char *t2;

LAB0:    xsi_set_current_line(10, ng0);

LAB2:    xsi_set_current_line(11, ng0);
    t1 = ((char*)((ng1)));
    t2 = (t0 + 1928);
    xsi_vlogvar_assign_value(t2, t1, 0, 0, 1);
    xsi_set_current_line(12, ng0);
    t1 = ((char*)((ng2)));
    t2 = (t0 + 2088);
    xsi_vlogvar_assign_value(t2, t1, 0, 0, 1);

LAB1:    return;
}

static void Always_16_1(char *t0)
{
    char t13[8];
    char t16[8];
    char *t1;
    char *t2;
    char *t3;
    char *t4;
    char *t5;
    unsigned int t6;
    unsigned int t7;
    unsigned int t8;
    unsigned int t9;
    unsigned int t10;
    char *t11;
    char *t12;
    int t14;
    char *t15;
    unsigned int t17;
    unsigned int t18;
    unsigned int t19;
    unsigned int t20;
    unsigned int t21;
    unsigned int t22;
    unsigned int t23;
    unsigned int t24;
    char *t25;
    char *t26;

LAB0:    t1 = (t0 + 3248U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(16, ng0);
    t2 = (t0 + 3568);
    *((int *)t2) = 1;
    t3 = (t0 + 3280);
    *((char **)t3) = t2;
    *((char **)t1) = &&LAB4;

LAB1:    return;
LAB4:    xsi_set_current_line(16, ng0);

LAB5:    xsi_set_current_line(17, ng0);
    t4 = (t0 + 1528U);
    t5 = *((char **)t4);
    t4 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (~(t6));
    t8 = *((unsigned int *)t5);
    t9 = (t8 & t7);
    t10 = (t9 != 0);
    if (t10 > 0)
        goto LAB6;

LAB7:    xsi_set_current_line(20, ng0);

LAB10:    xsi_set_current_line(21, ng0);
    t2 = (t0 + 1208U);
    t3 = *((char **)t2);
    t2 = (t0 + 1048U);
    t4 = *((char **)t2);
    xsi_vlogtype_concat(t13, 2, 2, 2U, t4, 1, t3, 1);

LAB11:    t2 = ((char*)((ng1)));
    t14 = xsi_vlog_unsigned_case_compare(t13, 2, t2, 2);
    if (t14 == 1)
        goto LAB12;

LAB13:    t2 = ((char*)((ng2)));
    t14 = xsi_vlog_unsigned_case_compare(t13, 2, t2, 2);
    if (t14 == 1)
        goto LAB14;

LAB15:    t2 = ((char*)((ng3)));
    t14 = xsi_vlog_unsigned_case_compare(t13, 2, t2, 2);
    if (t14 == 1)
        goto LAB16;

LAB17:    t2 = ((char*)((ng4)));
    t14 = xsi_vlog_unsigned_case_compare(t13, 2, t2, 2);
    if (t14 == 1)
        goto LAB18;

LAB19:
LAB20:
LAB8:    goto LAB2;

LAB6:    xsi_set_current_line(17, ng0);

LAB9:    xsi_set_current_line(18, ng0);
    t11 = ((char*)((ng1)));
    t12 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t12, t11, 0, 0, 1, 0LL);
    xsi_set_current_line(19, ng0);
    t2 = ((char*)((ng2)));
    t3 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB8;

LAB12:    xsi_set_current_line(22, ng0);

LAB21:    xsi_set_current_line(22, ng0);
    t5 = (t0 + 1928);
    t11 = (t5 + 56U);
    t12 = *((char **)t11);
    t15 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t15, t12, 0, 0, 1, 0LL);
    xsi_set_current_line(22, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    memset(t16, 0, 8);
    t5 = (t4 + 4);
    t6 = *((unsigned int *)t5);
    t7 = (~(t6));
    t8 = *((unsigned int *)t4);
    t9 = (t8 & t7);
    t10 = (t9 & 1U);
    if (t10 != 0)
        goto LAB25;

LAB23:    if (*((unsigned int *)t5) == 0)
        goto LAB22;

LAB24:    t11 = (t16 + 4);
    *((unsigned int *)t16) = 1;
    *((unsigned int *)t11) = 1;

LAB25:    t12 = (t16 + 4);
    t15 = (t4 + 4);
    t17 = *((unsigned int *)t4);
    t18 = (~(t17));
    *((unsigned int *)t16) = t18;
    *((unsigned int *)t12) = 0;
    if (*((unsigned int *)t15) != 0)
        goto LAB27;

LAB26:    t23 = *((unsigned int *)t16);
    *((unsigned int *)t16) = (t23 & 1U);
    t24 = *((unsigned int *)t12);
    *((unsigned int *)t12) = (t24 & 1U);
    t25 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t25, t16, 0, 0, 1, 0LL);
    goto LAB20;

LAB14:    xsi_set_current_line(23, ng0);

LAB28:    xsi_set_current_line(23, ng0);
    t3 = ((char*)((ng1)));
    t4 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t4, t3, 0, 0, 1, 0LL);
    xsi_set_current_line(23, ng0);
    t2 = ((char*)((ng2)));
    t3 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB20;

LAB16:    xsi_set_current_line(24, ng0);

LAB29:    xsi_set_current_line(24, ng0);
    t3 = ((char*)((ng2)));
    t4 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t4, t3, 0, 0, 1, 0LL);
    xsi_set_current_line(24, ng0);
    t2 = ((char*)((ng1)));
    t3 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB20;

LAB18:    xsi_set_current_line(25, ng0);

LAB30:    xsi_set_current_line(25, ng0);
    t3 = (t0 + 1928);
    t4 = (t3 + 56U);
    t5 = *((char **)t4);
    memset(t16, 0, 8);
    t11 = (t5 + 4);
    t6 = *((unsigned int *)t11);
    t7 = (~(t6));
    t8 = *((unsigned int *)t5);
    t9 = (t8 & t7);
    t10 = (t9 & 1U);
    if (t10 != 0)
        goto LAB34;

LAB32:    if (*((unsigned int *)t11) == 0)
        goto LAB31;

LAB33:    t12 = (t16 + 4);
    *((unsigned int *)t16) = 1;
    *((unsigned int *)t12) = 1;

LAB34:    t15 = (t16 + 4);
    t25 = (t5 + 4);
    t17 = *((unsigned int *)t5);
    t18 = (~(t17));
    *((unsigned int *)t16) = t18;
    *((unsigned int *)t15) = 0;
    if (*((unsigned int *)t25) != 0)
        goto LAB36;

LAB35:    t23 = *((unsigned int *)t16);
    *((unsigned int *)t16) = (t23 & 1U);
    t24 = *((unsigned int *)t15);
    *((unsigned int *)t15) = (t24 & 1U);
    t26 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t26, t16, 0, 0, 1, 0LL);
    xsi_set_current_line(25, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t5, t4, 0, 0, 1, 0LL);
    goto LAB20;

LAB22:    *((unsigned int *)t16) = 1;
    goto LAB25;

LAB27:    t19 = *((unsigned int *)t16);
    t20 = *((unsigned int *)t15);
    *((unsigned int *)t16) = (t19 | t20);
    t21 = *((unsigned int *)t12);
    t22 = *((unsigned int *)t15);
    *((unsigned int *)t12) = (t21 | t22);
    goto LAB26;

LAB31:    *((unsigned int *)t16) = 1;
    goto LAB34;

LAB36:    t19 = *((unsigned int *)t16);
    t20 = *((unsigned int *)t25);
    *((unsigned int *)t16) = (t19 | t20);
    t21 = *((unsigned int *)t15);
    t22 = *((unsigned int *)t25);
    *((unsigned int *)t15) = (t21 | t22);
    goto LAB35;

}


extern void work_m_16878520481005735364_0370641065_init()
{
	static char *pe[] = {(void *)Initial_10_0,(void *)Always_16_1};
	xsi_register_didat("work_m_16878520481005735364_0370641065", "isim/tb_ripple_counter_isim_beh.exe.sim/work/m_16878520481005735364_0370641065.didat");
	xsi_register_executes(pe);
}
